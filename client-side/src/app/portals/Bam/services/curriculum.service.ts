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

  /** Author: Mohamad Alhindi
    *  Batch: 1712-Dec11-2017
    *  This gets all curriculums from the API */
  getAllCurriculums(): Observable<Curriculum[]> {
    return this.http.get<Curriculum[]>(environment.cirriculum.getCirriculumAllUrl()).map(
      data => {
        return data;
      }
    );
  }

  /** Author: Mohamad Alhindi
    *  Batch: 1712-Dec11-2017
    *   This will get a specific curriculum by the curriculum id */
  getCurriculumById(cid: number): Observable<Curriculum> {
    return this.http.get<Curriculum>(environment.cirriculum.getCirriculumByIdUrl(cid)).map(
      data => {
        return data;
      }
    );
  }

  /** Author: Mohamad Alhindi
    * Batch: 1712-Dec11-2017
    * This will get a curriculums schedule based on the curriculum id */
  getSchedualeByCurriculumId(cid: number): Observable<CurriculumSubtopic[]> {
    return this.http.get<CurriculumSubtopic[]>(environment.cirriculum.getSchedulesByCurriculumIdUrl(cid)).map(
      data => {
        return data;
      }
    );
  }

  /** Author: Mohamad Alhindi
    * Batch: 1712-Dec11-2017
    * Gets the entire topic pool being taught at revature */
  getAllTopicPool(): Observable<SubtopicName[]> {
    return this.http.get<SubtopicName[]>(environment.cirriculum.getTopicPoolAllUrl()).map(
      data => {
        return data;
      }
    );
  }

  /** Author: Mohamad Alhindi
    * Batch: 1712-Dec11-2017
    * Gets entire subtopic pool as well as a relationship to which topic they belong to */
  getSubtopicPool(): Observable<Subtopic[]> {
    return this.http.get<Subtopic[]>(environment.cirriculum.getSubtopicPoolAllUrl()).map(
      data => {
        return data;
      }
    );
  }

  /** Author: Carter Taylor
    * Batch: 1712-Dec11-2017
    * Allows you to add a curriculum to the backend */
  addCurriculum(curriculum: CurriculumSubtopicDTO) {
    return this.http.post(environment.cirriculum.addCurriculumUrl(), curriculum, httpOptions).map(
      data => {
        return data;
      }
    );
  }

  /** Author: Carter Taylor
    * Batch: 1712-Dec11-2017
    * This method allows to set a version of a specific curriculum to master */
  markCurriculumAsMaster(curriculumId: number) {
    return this.http.get(environment.cirriculum.makeCurriculumMasterByIdUrl(curriculumId)).map(
      data => {
        return data;
      }
    );
  }

  /** Author: Carter Taylor
    * Batch: 1712-Dec11-2017
    * Sync batch by batchId getting list of curriculum subtopics related to that batch type */
  syncBatch(batchId: number) {
    return this.http.get(environment.cirriculum.syncBatchByIdUrl(batchId)).map(
      data => {
        return data;
      }
    );
  }
}
