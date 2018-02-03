import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Batch } from '../../Caliber/entities/Batch';
import { BatchType } from '../models/batchtype.modal';
import { environment } from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  observe: 'response' as 'response'
};

@Injectable()

export class BatchService {
  constructor(private http: HttpClient) { }

  getBatchAll(): Observable<Batch[]> {
    return this.http.get<Batch[]>(environment.batch.getBatchAllUrl()).map(
      data => {
        return data;
      }
    );
  }

  getPastBatches(): Observable<Batch[]> {
    return this.http.get<Batch[]>(environment.batch.getPastBatchesUrl()).map(
      data => {
        return data;
      }
    );
  }

  getFutureBatches(): Observable<Batch[]> {
    return this.http.get<Batch[]>(environment.batch.getFutureBatchesUrl()).map(
      data => {
        return data;
      }
    );
  }

  getBatchInProgress(): Observable<Batch> {
    return this.http.get<Batch>(environment.batch.getBatchInProgressUrl()).map(
      data => {
        return data;
      }
    );
  }

  getAllBatchesInProgress(email: string): Observable<Batch[]> {
    return this.http.get<Batch[]>(environment.batch.getAllBatchesInProgressUrl(email)).map(
      data => {
        return data;
      }
    );
  }

  getBatchById(bid: number): Observable<Batch> {
    return this.http.get<Batch>(environment.batch.getBatchByIdURL(bid)).map(
      data => {
        return data;
      }
    );
  }

  updateBatch(batch: Batch) {
    return this.http.post(environment.batch.updateBatchUrl(), batch, httpOptions).map(
      data => {
        return data;
      }
    );
  }

  getAllBatchTypes(): Observable<BatchType[]> {
    return this.http.get<BatchType[]>(environment.batch.getAllBatchTypesUrl()).map(
      data => {
        return data;
      }
    );
  }



}
