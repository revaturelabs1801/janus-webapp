import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchTextService {

  private TopicSubject = new Subject<any>();

  constructor() { }

  sendMessage(textToSearch: string) {
    this.TopicSubject.next({ text: textToSearch });
  }

  clearMessage() {
      this.TopicSubject.next();
  }

  getMessage(): Observable<any> {
      return this.TopicSubject.asObservable();
  }

}
