import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';
import { Curriculum } from '../models/curriculum.model';
import { CurriculumSubtopic } from '../models/curriculumSubtopic.model';
import { SubtopicName } from '../models/subtopicname.model';
import { Subtopic } from '../models/subtopic.model';
import { CurriculumSubtopicDTO } from '../models/curriculumSubtopicDTO.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  observe: 'response' as 'response'
};

@Injectable()
export class CurriculumService {

  constructor(private http: HttpClient) { }

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

  getSubtopicPool(): Observable<Subtopic[]> {
    return this.http.get<Subtopic[]>(environment.cirriculum.getSubtopicPoolAllUrl()).map(
      data => {
        return data;
      }
    );
  }

  addCurriculum(curriculum: CurriculumSubtopicDTO) {
    return this.http.post(environment.cirriculum.addCurriculumUrl(), curriculum, httpOptions).map(
      data => {
        return data;
      }
    );
  }

  markCurriculumAsMaster(curriculumId: number) {
    return this.http.get(environment.cirriculum.makeCurriculumMasterByIdUrl(curriculumId)).map(
      data => {
        return data;
      }
    );
  }

  syncBatch(batchId: number) {
    return this.http.get(environment.cirriculum.syncBatchByIdUrl(batchId)).map(
      data => {
        return data;
      }
    );
  }
}
