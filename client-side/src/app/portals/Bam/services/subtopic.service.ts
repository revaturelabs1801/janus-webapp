import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';


const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'}),
  observe: 'response' as 'response'
};

@Injectable()
export class SubtopicService {
  constructor(private http: HttpClient) { }

  addSubTopicName(subtopicName: string, topicId: number, typeId: number) {
    return this.http.post(environment.subtopic.addSubTopicName(subtopicName, topicId, typeId), httpOptions).map(
      data => {
        return data;
      }
    );
  }
}
