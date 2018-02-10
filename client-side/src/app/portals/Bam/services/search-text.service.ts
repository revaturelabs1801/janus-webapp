import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchTextService {

  private TopicSubject = new Subject<any>();

  constructor() { }

  sendMessage(textToSearch: string, type: string) {
    this.TopicSubject.next({
      type: type,
      text: textToSearch
     });
  }

  clearMessage() {
      this.TopicSubject.next();
  }

  getMessage(): Observable<any> {
      return this.TopicSubject.asObservable();
  }

}
