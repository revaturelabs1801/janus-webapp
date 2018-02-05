import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { BamUser } from '../../../models/bamuser.model';
import { Batch } from '../../../models/batch.model';
import { BatchService } from '../../../services/batch.service';

/**
 * @author Mohamed Swelam -- batch: 1712-dec-Java-Steve
 * Welcom component to handel the welcome part
 *
 */

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  private currentUser: BamUser = new BamUser(3, 'Ray', '', '', 'rl@revature.com', ' ', '4', null, '', '', '', '', 3);
  private message: String;
  private batchCount: number;
  private batches: Batch [];
  private selectedBatch: Batch;

  constructor(private batchSer: BatchService) {

   }

  ngOnInit() {
    this.getInProgressBatches();

  }

  /**
   * Function to get in-progress batches using the batches service.
   * and setting the response data to batches array.
   */
  getInProgressBatches() {
    this.batchSer.getAllBatchesInProgress(this.currentUser.email).subscribe(
      response => {
        this.batches = response;
        if (this.batches !== null) {
          this.batchCount =  1; // this.batches.length;
        } else {
          this.batchCount =  0;
        }
        this.setAllneededVars();
      });
  }

  /**
   * When a batch got selected it will set the selected batch var.
   */
  setSelected() {
    console.log(this.selectedBatch.name);
  }

  setAllneededVars() {
    if (this.batchCount > 1) {
      this.message = 'You have more than one current batch';
    } else if (this.batchCount === 1) {
      this.selectedBatch = this.batches.pop();
    } else {
      this.batchCount = 0;
      this.message = 'You have no current batches';
    }
  }
}
