import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CalendarEvent } from '../../../models/calendar-event.model';

/**
 *  This component opens a modal that checks if the user wishes to delete the subtopic from the calendar.
 * 
 * 	@author Sean Sung (1712-dec10-java-Steve)
**/

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

  /**
   * Calls calendar component to do deletion
   */
  deleteSubtopic() {
    this.deleteSubtopicEvent.emit(this.subtopic);
    $('#delete-subtopic-modal').modal('hide');
  }
}
