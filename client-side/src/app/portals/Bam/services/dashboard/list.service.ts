import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ListService {
  private batchIdSource = new BehaviorSubject<number>(0);
  currentBatchId = this.batchIdSource.asObservable();

  constructor() { }

  changeBatchId(batchId: number) {
    this.batchIdSource.next(batchId);
  }
}
