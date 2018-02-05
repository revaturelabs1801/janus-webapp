import { Component, OnInit } from '@angular/core';
import { BamUser } from '../../models/bamuser.model';
import { Batch } from '../../models/batch.model';
import { BatchType } from '../../models/batchtype.model';

const batchType = new BatchType(22, 'Namey', 1000);
const endDate = new Date(new Date().getTime() + (1000 * 60 * 60 * 730 * 2));
const startDate = new Date(new Date().getTime() - (1000 * 60 * 60 * 730));
const dummyUser = new BamUser(21, 'Meltdown', 'CPU', 'Spectre', 'CPU@Intel.com', 'pwd',
 'role', null, '111-111-1111', '222-222-2222', 'MicrosoftIsWorthless', 'pwd', 23);
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

  constructor() { }

  ngOnInit() {
    this.user = dummyUser;
    this.batch = dummyBatch;
    this.currentBatchStart1 = this.batch.startDate;
    this.currentBatchEnd1 = this.batch.endDate;
    let timePassed = 0;
    if (new Date() < this.currentBatchEnd1) {
      timePassed = (new Date().getTime() - this.currentBatchStart1.getTime());
    } else {
      timePassed = (this.currentBatchEnd1.getTime() - this.currentBatchStart1.getTime());
    }
    this.weekNum = Math.floor(((timePassed / (1000 * 60 * 60 * 24)) / 7) + 1);
  }
}
