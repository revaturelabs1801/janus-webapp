import { Component, OnInit } from '@angular/core';
import { BamUser } from '../../models/bamuser.model';
import { Batch } from '../../models/batch.model';
import { BatchType } from '../../models/batchtype.model';
import { BatchService } from '../../services/batch.service';
import { SessionService } from '../../services/session.service';
import { CalendarService } from '../../services/calendar.service';
import { Observable } from 'rxjs/observable';

const batchType = new BatchType(22, 'Namey', 1000);
const endDate = new Date(new Date().getTime() + (1000 * 60 * 60 * 730 * 2));
const startDate = new Date(new Date().getTime() - (1000 * 60 * 60 * 730));
const dummyUser = new BamUser(21, 'Meltdown', 'CPU', 'Spectre', 'CPU@Intel.com', 'pwd',
 2, null, '111-111-1111', '222-222-2222', 'MicrosoftIsWorthless', 'pwd', 23);
const dummyBatch = new Batch(20, 'meltdown-spectre', startDate, endDate, dummyUser, batchType);

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

  constructor(private _batchService: BatchService, private _calendarService: CalendarService,
    private session: SessionService) { }

  ngOnInit() {
    this.user = dummyUser; // JSON.parse(localStorage.getItem('bamUser'));
    
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
    
    
    /*
    this.batch = dummyBatch;
    this.currentBatchStart1 = this.batch.startDate;
    this.currentBatchEnd1 = this.batch.endDate;
    let timePassed = 0;
    if (new Date() < this.currentBatchEnd1) {
      timePassed = (new Date().getTime() - this.currentBatchStart1.getTime());
    } else {
      timePassed = (this.currentBatchEnd1.getTime() - this.currentBatchStart1.getTime());
    }
    this.weekNum = Math.floor(((timePassed / (1000 * 60 * 60 * 24)) / 7) + 1); */
  }
}
