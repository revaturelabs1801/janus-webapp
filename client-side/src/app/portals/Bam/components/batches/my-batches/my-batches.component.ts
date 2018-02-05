import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BatchService } from '../../../services/batch.service';
import { Batch } from '../../../models/batch.model';

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
    this.loadCurrent(this);
  }

  loadCurrent(event) {
    this.batches = null;
    this.batchService.getAllBatchesInProgress(this.email)
      .subscribe(batches => this.batches = batches);
  }

  loadPast(event) {
    this.batches = null;
    this.batchService.getPastBatches(this.email)
      .subscribe(batches => this.batches = batches);
  }

  loadFuture(event) {
    this.batches = null;
    this.batchService.getFutureBatches(this.email)
      .subscribe(batches => this.batches = batches);
  }

}
