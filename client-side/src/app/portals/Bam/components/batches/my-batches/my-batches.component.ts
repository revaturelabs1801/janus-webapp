import { Component, OnInit } from '@angular/core';
import { BatchService } from '../../../services/batch.service';
import { Batch } from '../../../models/batch.modal';

@Component({
  selector: 'app-my-batches',
  templateUrl: './my-batches.component.html',
  styleUrls: ['./my-batches.component.css']
})
export class MyBatchesComponent implements OnInit {

email = 'rl@revature.com';
batches: Batch[];

  constructor(private batchService: BatchService) { }

  ngOnInit() {
    this.getMyBatches();
  }

  getMyBatches() {
    this.batchService.getBatchInProgress(this.email)
      .subscribe(batches => this.batches = [batches]);
  }

}
