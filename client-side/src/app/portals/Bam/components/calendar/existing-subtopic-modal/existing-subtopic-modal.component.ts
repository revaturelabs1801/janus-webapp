import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Subtopic } from '../../../models/subtopic.model';

declare var $: any;

@Component({
  selector: 'app-existing-subtopic-modal',
  templateUrl: './existing-subtopic-modal.component.html',
  styleUrls: ['./existing-subtopic-modal.component.css']
})
export class ExistingSubtopicModalComponent implements OnInit {
  @Input()
  subtopic: Subtopic;
  @Output()
  addExistingSubtopicEvent: EventEmitter<Subtopic> = new EventEmitter<Subtopic>();

  constructor() { }

  ngOnInit() {
  }

  addExistingSubtopic() {
    this.addExistingSubtopicEvent.emit(this.subtopic);
    $('#add-existing-subtopic-modal').modal('hide');
  }
}
