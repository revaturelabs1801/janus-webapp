import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ScheduleModule, Schedule, } from 'primeng/primeng';
import { CalendarModule, Calendar } from 'primeng/primeng';
import { Subtopic } from '../../../models/subtopic.model';
import { CalendarEvent } from '../../../models/calendar-event.model';
import { CalendarService } from '../../../services/calendar.service';
import { CalendarStatusService } from '../../../services/calendar-status.service';

/**
    *	This component will serve as the main calendar view. 
    *   This component leverages the PrimeNG schedule UI component to render a drag and drop calendar for viewing and updating a batch's subtopics
*	@author Jordan DeLong, Sean Sung (1712-dec10-java-Steve)
*	
*	
*/

declare var $: any;
const DRAG_REVERT_DURATION = 300;

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {
  @ViewChild('fc') fc: Schedule;
  @ViewChild('datePicker') datePicker: Calendar;
  @ViewChild('tooltip') tooltip: ElementRef;
  @ViewChild('body') body: ElementRef;
  @ViewChild('status') status: ElementRef;

  events: CalendarEvent[] = [];
  gotoDateValue: Date;
  overridenDate: Date;
  draggedCalendarEvent: CalendarEvent;

  /* Tooltip data bindings */
  subtopicTooltip: string;
  statusTooltip: string;

  trashOpacity: number;

  constructor(private calendarService: CalendarService, private statusService: CalendarStatusService) { }

  ngOnInit() {
    this.calendarService.getSubtopicsByBatchPagination(22506, 0, 34).subscribe(
      subtopics => {
        for (let subtopic of subtopics) {
          let calendarEvent = new CalendarEvent();

          calendarEvent.subtopicId = subtopic.subtopicId;
          calendarEvent.title = subtopic.subtopicName.name;
          calendarEvent.start = new Date(subtopic.subtopicDate);
          calendarEvent.status = subtopic.status.name;
          calendarEvent.color = this.statusService.getStatusColor(calendarEvent.status);

          this.events.push(calendarEvent);
        }
        this.overridenDate = this.events[0].start;
      }
    );

    //event handler for newly added topics
    this.calendarService.addCalendarEvent
      .subscribe(calendarEvent => {
        this.addEvent(calendarEvent);
      });

    if (window.innerWidth < 1000) {
      this.fc.defaultView = "listMonth";
      this.fc.header = {
        left: 'agendaDay,basicWeek,listMonth',
        center: 'title',
        right: 'today prev,next'
      }
    } else {
      this.fc.defaultView = "month";
      this.fc.header = {
        left: 'agendaDay,agendaWeek,month listMonth',
        center: 'title',
        right: 'today prev,next'
      }
    }

    this.fc.options = {
      defaultDate: Date.now(),
      nowIndicator: true,
      navLinks: true,
      weekNumbers: true,
      weekends: true,
      droppable: true,
      eventLimit: 3,
      longPressDelay: 100,
      dragRevertDuration: 0,
      scrollTime: '09:00:00',
      businessHours: {
        // days of week. an array of zero-based day of week integers (0=Sunday)
        dow: [1, 2, 3, 4, 5], // Monday - Friday

        start: '9:00', // a start time (9am)
        end: '17:00', // an end time (5pm)
      }
    }

    $('.fc-trash').droppable(
      {
        accept: "*",

        drop: (event, ui) => this.trashDropEvent(event, ui, this.draggedCalendarEvent),

        over: function (event, ui) {
          event.target.style.opacity = 0.5;
        },

        out: function (event, ui) {
          event.target.style.opacity = 1;
        }
      });
  }

  /*Date Picker Event*/
  jumpToDate(date) {
    this.fc.gotoDate(date);
    this.fc.changeView("agendaDay");
  }

  /**
   * Changes the status as well as the color of the calendar event based on current date and date of the event
   * @param event 
   * @author Sean Sung (1712-dec10-java-Steve)
   */
  handleEventClick(event) {
    let clickedTopic = event.calEvent;
    let calendarEvent = this.mapSubtopicFromEvent(clickedTopic);

    clickedTopic.status = this.statusService.updateNextStatus(calendarEvent);
    clickedTopic.color = this.statusService.getStatusColor(calendarEvent.status);
    calendarEvent.color = clickedTopic.color;

    this.calendarService.updateTopicStatus(calendarEvent, 22506).subscribe();
    this.addEvent(calendarEvent);
    console.log(this.events);
  }

  /**
   * Resets drag duration to original value and tracks currently dragged target
   * @param event 
   */
  handleEventDragStart(calendar) {
    this.draggedCalendarEvent = this.mapSubtopicFromEvent(calendar.event);
  }

  /**
   * Updates date and status based on new date.
   * Also updates reference that we keep
   * @param calendar 
   */
  handleEventDrop(calendar) {
    let droppedTopic = calendar.event;
    let calendarEvent = this.mapSubtopicFromEvent(droppedTopic);
    let milliDate = calendarEvent.start.getTime();

    droppedTopic.status = this.statusService.updateMovedStatus(calendarEvent);
    droppedTopic.color = this.statusService.getStatusColor(droppedTopic.status);
    calendarEvent.color = droppedTopic.color;

    //update date and status synchronously
    this.calendarService.changeTopicDate(droppedTopic.subtopicId, 22506, milliDate)
      .subscribe(
      response => {
        this.calendarService.updateTopicStatus(calendarEvent, 22506).subscribe();
      },
      error => {
        this.calendarService.updateTopicStatus(calendarEvent, 22506).subscribe();
      }
      );
    this.updateEvent(calendarEvent);
    this.fc.updateEvent(droppedTopic);
  }

  /**
   * Unhides the tooltip and positions it above the element
   * Holds information such as the subtopic and current status
   * 
   * @param event
   * @author Sean Sung, Francisco Palomino (1712-dec10-java-Steve)
   */
  handleEventMouseover(event) {
    $(event.jsEvent.currentTarget).draggable(
      {
        revert: true,
        revertDuration: DRAG_REVERT_DURATION,
        zIndex: -500
      }
    );
    let mouseoverTopic = event.calEvent;
    this.subtopicTooltip = mouseoverTopic.title;
    this.statusTooltip = mouseoverTopic.status;

    //calculate y point of tooltip to be below mouse
    let y = event.jsEvent.target.getBoundingClientRect().top;
    let offsetY = this.body.nativeElement.getBoundingClientRect().top;
    y = y - offsetY + 140;

    this.status.nativeElement.style.background = this.statusService.getStatusColor(this.statusTooltip);
    this.tooltip.nativeElement.style.display = 'inline';
    this.tooltip.nativeElement.style.top = y + 'px';
    this.tooltip.nativeElement.style.left = event.jsEvent.clientX + 'px';
  }

  /* Hides tooltip on mouse out */
  handleEventMouseout(event) {
    this.tooltip.nativeElement.style.display = 'none';
  }

  mapSubtopicFromEvent(event): CalendarEvent {
    let calendarEvent = new CalendarEvent();
    calendarEvent.subtopicId = event.subtopicId;
    calendarEvent.title = event.title;
    calendarEvent.color = event.color;
    calendarEvent.status = event.status;
    //convert from moment to date
    calendarEvent.start = new Date(event.start.format());

    return calendarEvent;
  }

  updateEvent(changedSubtopic: CalendarEvent) {
    let index = this.eventExists(changedSubtopic);
    if(index == 0) {
      this.overridenDate = changedSubtopic.start;
    }
    //reset the first index date that gets overriden on drops
    this.events[0].start = this.overridenDate;

    this.events[index].start = changedSubtopic.start;
    this.events[index].status = changedSubtopic.status;
    this.events[index].color = changedSubtopic.color;
    console.log(this.events);
  }

  /**
   * Removes event if it already exists and then appends new event to this.events
   * @param calendarEvent 
   */
  addEvent(calendarEvent: CalendarEvent) {
    let index = this.eventExists(calendarEvent);
    if (index > -1) {
      this.events.splice(index, 1, calendarEvent);
    } else {
      this.events.push(calendarEvent);
    }
  }

  /**
   * Removes event at given index,
   * If index is 0, then overridenDate must be updated to the next index 
   * to keep a reference to the date when calendar overwrites it
   * @param index
   */
  removeEvent(index: number) {
    if (index == 0) {
      this.overridenDate = this.events[1].start;
    }
    this.events.splice(index, 1);
  }

  /* check if event exists in the array and returns the index if it does or -1 if it doesn't */
  eventExists(calendarEvent: CalendarEvent): number {
    for (let i = 0; i < this.events.length; i++) {
      if (this.events[i].title == calendarEvent.title) {
        return i;
      }
    }
    return -1;
  }

    /**
   * Callback function to handle drop events that land on the trash icon
   * Deletes existing subtopics from the batch
   * 
   * @param event 
   * @param ui 
   * @param calendarEvent 
   */
  trashDropEvent(event, ui, calendarEvent: CalendarEvent) {
    event.target.style.opacity = 1;
    this.removeEvent(this.eventExists(calendarEvent));
  }
}
