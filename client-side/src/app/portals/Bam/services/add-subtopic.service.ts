import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

const httpOptionsJson = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AddSubtopicService {

  getBatchSubtopicsUrl = `http://localhost:9001/api/v1/calendar/subtopicspagination/22506/0/34`;
  getBatchIdUrl = `http://localhost:9001/api/v1/batches/byid/22506`;
  addSubtopicUrl = `http://localhost:9001/api/v1/subtopic/addsubtopic`;
  getPoolUrl = `http://localhost:9001/api/v1/curriculum/topicpool`;
  updateDateURL = `http://localhost:9001/api/v1/calendar/dateupdate`;

  constructor(private httpPost: HttpClient, private httpGet: Http) { }

  getBatchById(): Observable<any> {
    return this.httpGet
        .get(this.getBatchIdUrl)
        .map( (response: Response) => {
          return <any> response;
        });
  }

  getBatchSubtopics(): Observable<any> {
    return this.httpGet
        .get(this.getBatchSubtopicsUrl)
        .map( (response: Response) => {
          return <any> response;
        });
  }

  updateDate(batchId, subtopicId, date): Observable<any> {
    const pathVbs = `/${subtopicId}/${batchId}/${date}`;
    return this.httpPost.post<any>(this.updateDateURL + pathVbs, '' , httpOptions);
  }

  getSubtopicPool(): Observable<any> {
    return this.httpGet
        .get(this.getPoolUrl)
        .map( (response: Response) => {
          return <any> response.json();
        });
  }

  addSubtopic(subtopic): Observable<any> {
    return this.httpPost.post<any>(this.addSubtopicUrl, JSON.stringify(subtopic), httpOptionsJson);
  }

}
