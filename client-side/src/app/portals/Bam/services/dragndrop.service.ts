import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DragndropService {

  private dragNdropSource = new BehaviorSubject<any>(null);
  currentItem = this.dragNdropSource.asObservable();

  private subtopic = new BehaviorSubject<any>(null);
  currentSubtopic = this.subtopic.asObservable();


  constructor() { }

  sendItem(event) {
    this.dragNdropSource.next(event);
  }

  sendSubtopic(subtopic) {
    this.subtopic.next(subtopic);
  }

}
