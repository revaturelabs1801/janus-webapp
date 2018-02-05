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

  email = 'rl@revature.com'; // Temporary for testing
  batches: Batch[];

  constructor(private batchService: BatchService) { }

  ngOnInit() {
    this.loadCurrent(this);
  }

  // Loads the user's batches currently in progress
  loadCurrent(event) {
    this.batches = null;
    this.batchService.getAllBatchesInProgress(this.email)
      .subscribe(batches => this.batches = batches);
  }

  // Loads the user's past batches
  loadPast(event) {
    this.batches = null;
    this.batchService.getPastBatches(this.email)
      .subscribe(batches => this.batches = batches);
  }

  // Loads the user's future batches
  loadFuture(event) {
    this.batches = null;
    this.batchService.getFutureBatches(this.email)
      .subscribe(batches => this.batches = batches);
  }

}
