import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CalendarEvent } from '../../../models/calendar-event.model';

declare var $: any;

@Component({
  selector: 'app-delete-subtopic-modal',
  templateUrl: './delete-subtopic-modal.component.html',
  styleUrls: ['./delete-subtopic-modal.component.css']
})
export class DeleteSubtopicModalComponent implements OnInit {
  @Input()
  subtopic: CalendarEvent;
  @Output()
  deleteSubtopicEvent: EventEmitter<CalendarEvent> = new EventEmitter<CalendarEvent>();
  
  constructor() { }

  ngOnInit() { }

  deleteSubtopic() {
    this.deleteSubtopicEvent.emit(this.subtopic);
    $('#delete-subtopic-modal').modal('hide');
  }
}
