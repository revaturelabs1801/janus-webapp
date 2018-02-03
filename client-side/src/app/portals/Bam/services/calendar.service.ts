import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SubTopic } from '../models/subtopic.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { TopicWeek } from '../models/topicweek.model';
import { TopicName } from '../models/topicname.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  observe: 'response' as 'response'
};

@Injectable()
export class CalendarService {
  constructor(private http: HttpClient) { }

  getSubtopicsByBatchPagination(batchId: number, pageNumber: number, pageSize: number): Observable<SubTopic[]> {
    return this.http.get<SubTopic[]>(environment.calendar.getSubtopicsByBatchPaginationUrl(batchId, pageNumber, pageSize)).map(
      data => {
        return data;
      }
    );
  }

  getSubtopicsByBatch(batchId: number): Observable<SubTopic[]> {
    return this.http.get<SubTopic[]>(environment.calendar.getTopicsByBatchPagUrl(batchId)).map(
      data => {
        return data;
      }
    );
  }

  getNumberOfSubTopicsByBatch(batchId: number): Observable<number> {
    return this.http.get<number>(environment.calendar.getNumberOfSubTopicsByBatchUrl(batchId)).map(
      data => {
        return data;
      }
    );
  }

  getTopicsByBatchPag(batchId: number): Observable<TopicWeek> {
    return this.http.get<TopicWeek>(environment.calendar.getTopicsByBatchPagUrl(batchId)).map(
      data => {
        return data;
      }
    );
  }

  changeTopicDate(subtopicId: number, batchId: number, status: number) {
    return this.http.get(environment.calendar.changeTopicDateUrl(subtopicId, batchId, status)).map(
      data => {
        return data;
      }
    );
  }

  updateTopicStatus(subtopicId: number, batchId: number, status: number) {
    return this.http.get(environment.calendar.updateTopicStatusUrl(subtopicId, batchId, status)).map(
      data => {
        return data;
      }
    );
  }

  addTopics(topics: TopicName[]) {
    return this.http.post(environment.calendar.addTopicsUrl(), topics, httpOptions).map(
      data => {
        return data;
      }
    );
  }

}
