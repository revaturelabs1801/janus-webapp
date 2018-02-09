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

  subtopicTooltip: string;
  statusTooltip: string;

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
        console.log(calendarEvent);
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
      scrollTime: '09:00:00',
      businessHours: {
        // days of week. an array of zero-based day of week integers (0=Sunday)
        dow: [1, 2, 3, 4, 5], // Monday - Friday

        start: '9:00', // a start time (9am)
        end: '17:00', // an end time (5pm)
      }
    }
  }

  /*Date Picker Event*/
  jumpToDate(date) {
    this.fc.gotoDate(date);
    this.fc.changeView("agendaDay");
  }

  handleEventClick(event) {
    var clickedTopic = event.calEvent;
    var calendarEvent = this.mapSubtopicFromEvent(clickedTopic);

    clickedTopic.status = this.statusService.updateNextStatus(calendarEvent);
    clickedTopic.color = this.statusService.getStatusColor(calendarEvent.status);

    this.calendarService.updateTopicStatus(calendarEvent, 22506).subscribe();
    this.fc.updateEvent(clickedTopic);
    this.addEvent(calendarEvent);
  }

  handleEventDrop(calendar) {
    var droppedTopic = calendar.event;
    var calendarEvent = this.mapSubtopicFromEvent(droppedTopic);
    var milliDate = calendarEvent.start.getTime();

    droppedTopic.status = this.statusService.updateMovedStatus(calendarEvent);
    droppedTopic.color = this.statusService.getStatusColor(droppedTopic.status);

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
    this.fc.updateEvent(droppedTopic);
    this.updateEvent(calendarEvent);
  }

  /**
   * Unhides the tooltip and positions it above the element
   */
  handleEventMouseover(event) {
    let y = event.jsEvent.target.getBoundingClientRect().top;
    let offsetY = this.body.nativeElement.getBoundingClientRect().top;
    y = y - offsetY + 50;
    let mouseoverTopic = event.calEvent;
    this.subtopicTooltip = mouseoverTopic.title;
    this.statusTooltip = mouseoverTopic.status;

    this.status.nativeElement.style.background = this.statusService.getStatusColor(this.statusTooltip);
    this.tooltip.nativeElement.style.display = 'inline';
    this.tooltip.nativeElement.style.top = y + 'px';
    this.tooltip.nativeElement.style.left = event.jsEvent.clientX + 'px';
  }

  handleEventMouseout(event) {
    this.tooltip.nativeElement.style.display = 'none';
  }

  mapSubtopicFromEvent(event): CalendarEvent {
    let calendarEvent = new CalendarEvent();
    calendarEvent = event;
    //convert from moment to date
    calendarEvent.start = new Date(event.start.format());

    return calendarEvent;
  }

  updateEvent(changedSubtopic: CalendarEvent) {
    //reset the first index date that gets overriden on drops
    this.events[0].start = this.overridenDate;
    let index = this.eventExists(changedSubtopic);
    //update overridenDate to new date if updating first index
    if(index == 0) {
      this.overridenDate = this.events[index].start;
    }

    this.events[index].start = changedSubtopic.start;
    this.events[index].status = changedSubtopic.status;
    this.events[index].color = changedSubtopic.color;
  }

  addEvent(calendarEvent: CalendarEvent) {
    let index = this.eventExists(calendarEvent);
    if (index > -1) {
      this.events.splice(index, 1);
    } 
    this.events.push(calendarEvent);
    this.overridenDate = this.events[0].start;
  }

  eventExists(calendarEvent: CalendarEvent): number {
    for (let i = 0; i < this.events.length; i++) {
      if (this.events[i].title == calendarEvent.title) {
        return i;
      }
    }
    return -1;
  }
}
