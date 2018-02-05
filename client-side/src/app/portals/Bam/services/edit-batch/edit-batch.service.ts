import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Batch } from '../../models/batch.model';
import { BatchType } from '../../models/batch-type.model';

const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable()
export class EditBatchService {


  constructor(private http: HttpClient) {
    // TODO: get current_batch_id from
  }

  getBatchById(batchId: number): Observable<Batch> {
    return this.http.get<Batch>('http://localhost:9001/api/v1/batches/byid?batchId=' + batchId, httpOptions);
  }

  getUsersInBatch(batchId: number): Observable<Batch[]> {
    return this.http.get<Batch[]>('http://localhost:9001/api/v1/users/inbatch?batchId=' + batchId, httpOptions);
  }

  getUsersNotInBatch(batchId: number): Observable<Batch[]> {
    return this.http.get<Batch[]>('http://localhost:9001/api/v1/users/notinabatch?batchId=' + batchId, httpOptions);
  }

  updateBatch(batch: Batch) {
    // TODO url: "rest/api/v1/Batches/UpdateBatch",
  }

  getAllBatchTypes(): Observable<BatchType[]> {
    return this.http.get<BatchType[]>('http://localhost:9001/api/v1/batches/batchtypes', httpOptions);
  }

  addUserToBatch() {
    // TODO This function adds a user to the batch
    // url: "rest/api/v1/Users/Add",
  }

  removeUserFromBatch() {
    // TODO This function removes a user from a batch
    // url: "rest/api/v1/Users/Remove",
    // params: {
    //   userId: id
    // }
  }

  dropAssociateFromBatch() {
    // TODO This function is used to drop an associate
    // url: "rest/api/v1/Users/Drop",
  }

}
