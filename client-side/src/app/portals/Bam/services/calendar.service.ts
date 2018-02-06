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

  /**
   * Gets subtopics by batch and uses pagination to limit the results
   * apposed to getting them all at one time
   * @author James Holzer | Batch: 1712-dec10-java-steve
   * @returns SubTopic[]
   * @param batchId number
   * @param pageNumber: number
   * @param pageSize: number
   */
  getSubtopicsByBatchPagination(batchId: number, pageNumber: number, pageSize: number): Observable<SubTopic[]> {
    return this.http.get<SubTopic[]>(environment.calendar.getSubtopicsByBatchPaginationUrl(batchId, pageNumber, pageSize)).map(
      data => {
        return data;
      }
    );
  }

  /**
   * Retrieves subtopic by batchId
   * @author James Holzer | Batch: 1712-dec10-java-steve
   * @returns SubTopic[]
   * @param batchId number
   */
  getSubtopicsByBatch(batchId: number): Observable<SubTopic[]> {
    return this.http.get<SubTopic[]>(environment.calendar.getTopicsByBatchPagUrl(batchId)).map(
      data => {
        return data;
      }
    );
  }

  /**
   * Retrieves the number of subtopics by batchId
   * @author James Holzer | Batch: 1712-dec10-java-steve
   * @returns number
   * @param batchId number
   */
  getNumberOfSubTopicsByBatch(batchId: number): Observable<number> {
    return this.http.get<number>(environment.calendar.getNumberOfSubTopicsByBatchUrl(batchId)).map(
      data => {
        return data;
      }
    );
  }

  /**
   * Retrieves the topics by batchId into a TopicWeek for a given week
   * @author James Holzer | Batch: 1712-dec10-java-steve
   * @returns TopicWeek
   * @param batchId number
   */
  getTopicsByBatchPag(batchId: number): Observable<TopicWeek> {
    return this.http.get<TopicWeek>(environment.calendar.getTopicsByBatchPagUrl(batchId)).map(
      data => {
        return data;
      }
    );
  }

  /**
   * Changes the subtopic date
   * @author James Holzer | Batch: 1712-dec10-java-steve
   * @returns
   * @param subtopicId number
   * @param batchId: number
   * @param status: number
   */
  changeTopicDate(subtopicId: number, batchId: number, status: number) {
    return this.http.get(environment.calendar.changeTopicDateUrl(subtopicId, batchId, status)).map(
      data => {
        return data;
      }
    );
  }

  /**
   * Updates the topic's status
   * @author James Holzer | Batch: 1712-dec10-java-steve
   * @returns
   * @param subtopicId number
   * @param batchId: number
   * @param status: number
   */
  updateTopicStatus(subtopicId: number, batchId: number, status: number) {
    return this.http.get(environment.calendar.updateTopicStatusUrl(subtopicId, batchId, status)).map(
      data => {
        return data;
      }
    );
  }

  /**
   * Add a topic to a days
   * @author James Holzer | Batch: 1712-dec10-java-steve
   * @returns
   * @param topics: TopicName[]
   */
  addTopics(topics: TopicName[]) {
    return this.http.post(environment.calendar.addTopicsUrl(), topics, httpOptions).map(
      data => {
        return data;
      }
    );
  }

}
