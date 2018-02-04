import { Component, OnInit } from '@angular/core';

import { BatchService } from '../../../services/batch.service';
import { Observable } from 'rxjs/Observable';
import { Batch } from '../../../models/batch.model';


@Component({
  selector: 'app-batch-progress-bar',
  templateUrl: './batch-progress-bar.component.html',
  styleUrls: ['./batch-progress-bar.component.css']
})
export class BatchProgressBarComponent implements OnInit {

  batchObs: Observable<Batch>;
  batch: Batch;
  batchName: string;
  showSpinner = true;
  batchStart: Date;
  batchEnd: Date;
  constructor(private _batchService: BatchService) {

   }

  ngOnInit() {
    this.batchObs = this._batchService.getBatchById(4);
    this.batchObs.subscribe(
      data => {
        this.showSpinner = false;
        this.batch = data;
      });


  }
}
