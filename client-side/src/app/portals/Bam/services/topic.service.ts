import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'}),
  observe: 'response' as 'response'
};

@Injectable()
export class TopicService {
  constructor(private http: HttpClient) { }

  /**
   * Adds a topic to the database.
   * @param name string
   */
  addTopicName(name: string) {
    return this.http.post(environment.topic.addTopicName(name), httpOptions).map(
      data => {
        return data;
      }
    );
  }
}
