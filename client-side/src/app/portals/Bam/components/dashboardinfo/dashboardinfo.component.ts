import { Component, OnInit } from '@angular/core';
import { BamUser } from '../../models/bamuser.model';
import { Batch } from '../../models/batch.model';
import { BatchType } from '../../models/batchtype.model';
import { BatchService } from '../../services/batch.service';
import { SessionService } from '../../services/session.service';
import { CalendarService } from '../../services/calendar.service';
import { Observable } from 'rxjs/observable';

/**
 * @author David Graves -- batch: 1712-dec-Java-Steve
 * Dashboardinfo component to display trainer name and current batch progress by date
 */

@Component({
  selector: 'app-dashboardinfo',
  templateUrl: './dashboardinfo.component.html',
  styleUrls: ['./dashboardinfo.component.css']
})
export class DashboardinfoComponent implements OnInit {

  user: BamUser;
  batch: Batch;
  currentBatchStart1: Date;
  currentBatchEnd1: Date;
  weekNum: number;
  batchId: number;
  batchObs: Observable<Batch>;

  constructor(private _batchService: BatchService,
    private session: SessionService) { }

/**
 * @author David Graves -- batch: 1712-dec-Java-Steve
 * On init: uses bamUser stored in localStorage to populate trainer-specific information.
 * Subscribes to obtain current batch info to deterime start and end date, as well as current week.
 */

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('bamUser'));
    this.session.selectedBatchSubject.subscribe(data =>  {
      this.batchId = data.id;
      this.batchObs = this._batchService.getBatchById(this.batchId);
      this.batchObs.subscribe(
        data1 => {
          this.batch = data1;
          this.currentBatchStart1 = this.batch.startDate;
          this.currentBatchEnd1 = this.batch.endDate;
          let timePassed = 0;
          if (new Date() < this.currentBatchEnd1) {
            timePassed = (new Date().getTime()
             - new Date(this.currentBatchStart1).getTime());
          } else {
            timePassed = (new Date(this.currentBatchEnd1).getTime() -
            new Date(this.currentBatchStart1).getTime());
          }
          this.weekNum = Math.floor((((timePassed / (1000 * 60 * 60 * 24)) + 1) / 7) + 1);
        });
    });
  }
}
