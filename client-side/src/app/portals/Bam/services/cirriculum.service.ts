import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';
import { Curriculum } from '../models/curriculum.model';
import { CurriculumSubtopic } from '../models/curriculumSubtopic.model';
import { SubtopicName } from '../models/subtopicname.model';
import { SubTopic } from '../models/subtopic.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  observe: 'response' as 'response'
};

@Injectable()
export class CirriculumService {

  constructor(private http: HttpClient) { }

  // addCurriculumUrl: () => `${context}/curriculum/addcurriculum`,
  // makeCurriculumMasterByIdUrl: (id: number) => `${context}/curriculum/makemaster/${id}`,
  // syncBatchByIdUrl: (id: number) => `${context}/curriculum/syncbatch/${id}`}

  getAllCurriculums(): Observable<Curriculum[]> {
    return this.http.get<Curriculum[]>(environment.cirriculum.getCirriculumAllUrl()).map(
      data => {
        return data;
      }
    );
  }

  getCurriculumById(cid: number): Observable<Curriculum> {
    return this.http.get<Curriculum>(environment.cirriculum.getCirriculumByIdUrl(cid)).map(
      data => {
        return data;
      }
    );
  }

  getSchedualeByCurriculumId(cid: number): Observable<CurriculumSubtopic[]> {
    return this.http.get<CurriculumSubtopic[]>(environment.cirriculum.getSchedulesByCurriculumIdUrl(cid)).map(
      data => {
        return data;
      }
    );
  }

  getAllTopicPool(): Observable<SubtopicName[]> {
    return this.http.get<SubtopicName[]>(environment.cirriculum.getTopicPoolAllUrl()).map(
      data => {
        return data;
      }
    );
  }

  getSubtopicPool(): Observable<SubTopic[]> {
    return this.http.get<SubTopic[]>(environment.cirriculum.getSubtopicPoolAllUrl()).map(
      data => {
        return data;
      }
    );
  }


}
