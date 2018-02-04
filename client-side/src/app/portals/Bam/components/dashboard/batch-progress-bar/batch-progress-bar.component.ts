import { Component, OnInit } from '@angular/core';

import { BatchService } from '../../../services/batch.service';
import { Observable } from 'rxjs/Observable';
import { Batch } from '../../../models/batch.model';
import { CalendarService } from '../../../services/calendar.service';


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
  subTopicCompleted: number;
  subTopicTotal: number;
  percentCompleted;
  currentDate;
  completedDate;
  constructor(private _batchService: BatchService) {

   }

  ngOnInit() {
    this.batchObs = this._batchService.getBatchById(4);
    this.batchObs.subscribe(
      data => {
        this.showSpinner = false;
        this.batch = data;
        this.currentDate = new Date();

        if ((this.currentDate.valueOf() - this.batch.startDate.valueOf() > this.batch.endDate.valueOf() - this.batch.startDate.valueOf())) {
            this.completedDate = this.batch.endDate.valueOf() - this.batch.startDate.valueOf();
        }else {
          this.completedDate = (this.currentDate.valueOf() - this.batch.startDate.valueOf());
        }
        this.percentCompleted = this.completedDate.valueOf() / (this.batch.endDate.valueOf() - this.batch.startDate.valueOf()) * 100;
      });


  }
}
