import { Component, OnInit, ViewChild } from '@angular/core';
import { ScheduleModule, Schedule, } from 'primeng/primeng';
import { CalendarModule, Calendar } from 'primeng/primeng';
import { Subtopic } from '../../../models/subtopic.model';
import { CalendarEvent } from '../../../models/calendar-event.model';
import { CalendarService } from '../../../services/calendar.service';
import { CalendarStatusService } from '../../../services/calendar-status.service';

/**
    *	This component will serve as the main calendar view. 
    *   This component leverages the PrimeNG schedule UI component to render a drag and drop calendar for viewing and updating a batch's subtopics
*	@author Jordan DeLong (1712-dec10-java-Steve)
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

  events: CalendarEvent[] = [];
  overridenDate: Date;

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
  }

  handleEventClick(event) {
    var clickedTopic = event.calEvent;
    var calendarEvent = this.mapSubtopicFromEvent(clickedTopic);

    clickedTopic.status = this.statusService.updateNextStatus(calendarEvent);
    clickedTopic.color = this.statusService.getStatusColor(calendarEvent.status);

    this.calendarService.updateTopicStatus(calendarEvent, 22506).subscribe();
    this.fc.updateEvent(clickedTopic);
    this.updateEvents(calendarEvent);
  }

  handleEventDrop(calendar) {
    var droppedTopic = calendar.event;
    var calendarEvent = this.mapSubtopicFromEvent(droppedTopic);
    var milliDate = calendarEvent.start.getTime();

    droppedTopic.status = this.statusService.updateMovedStatus(calendarEvent);
    droppedTopic.color = this.statusService.getStatusColor(droppedTopic.status);

    //update date and status synchronously
    this.calendarService.changeTopicDate(droppedTopic.subtopicId, 22506, milliDate)
      .subscribe(response => {
        this.calendarService.updateTopicStatus(calendarEvent, 22506).subscribe();
      });
    this.fc.updateEvent(droppedTopic);
    this.updateEvents(calendarEvent);
  }

  mapSubtopicFromEvent(event): CalendarEvent {
    let calendarEvent = new CalendarEvent();
    calendarEvent = event;
    //convert from moment to date
    calendarEvent.start = new Date(event.start.format());

    return calendarEvent;
  }

  /* Updates the subtopic in the events array after an event handler is fired */
  updateEvents(changedSubtopic: CalendarEvent) {
    this.events[0].start = this.overridenDate;
    for (let i = 0; i < this.events.length; i++) {
      if (this.events[i].title == changedSubtopic.title) {
        this.events[i].status = changedSubtopic.status;
        this.events[i].start = changedSubtopic.start;
        this.events[i].color = changedSubtopic.color;
      }
    }
  }
}
