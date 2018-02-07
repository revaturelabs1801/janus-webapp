import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';
import { Subtopic } from '../models/subtopic.model';
import { Batch } from '../models/batch.model';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

const httpOptionsJson = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AddSubtopicService {

  constructor(private httpPost: HttpClient, private httpGet: Http) { }

  /**
   * Retrieves current batch information
   * @author Francisco Palomino | Batch: 1712-dec10-java-steve
   */
  getBatchById(): Observable<Batch> {
    return this.httpGet
        .get(environment.addsubtopics.getBatchIdUrl(22506))
        .map( (response: Response) => {
          return <Batch> response.json();
        });
  }

  /**
   * Retrieves all the subtopics of the current batch
   * @author Francisco Palomino | Batch: 1712-dec10-java-steve
   */
  getBatchSubtopics(): Observable<Subtopic[]> {
    return this.httpGet
        .get(environment.addsubtopics.getBatchSubtopicsUrl(22506, 34, 0))
        .map( (response: Response) => {
          return <Subtopic[]> response.json();
        });
  }

  /**
   * Updates old date on the database with the new date selected
   * @author Francisco Palomino | Batch: 1712-dec10-java-steve
   * @param batchId current batch id
   * @param subtopicId subtopic id
   * @param date date of the subtopic
   */
  updateDate(batchId, subtopicId, date): Observable<any> {
    const pathVbs = `/${subtopicId}/${batchId}/${date}`;
    return this.httpPost.post<any>(environment.addsubtopics.updateDateUrl() + pathVbs, '' , httpOptions);
  }

  /**
   * Obtains all the subtopics from the database
   * @author Francisco Palomino | Batch: 1712-dec10-java-steve
   */
  getSubtopicPool(): Observable<any> {
    return this.httpGet
        .get(environment.addsubtopics.getSubtopicPoolUrl())
        .map( (response: Response) => {
          return <any> response.json();
        });
  }

  /**
   * Sends a subtopic object to be persisted to the database
   * @param subtopic subtopic object
   */
  addSubtopic(subtopic): Observable<Subtopic> {
    return this.httpPost.post<Subtopic>(environment.addsubtopics.addSubtopicUrl(), JSON.stringify(subtopic), httpOptionsJson);
  }

}
