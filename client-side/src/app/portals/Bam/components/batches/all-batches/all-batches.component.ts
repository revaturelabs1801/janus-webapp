import { Component, OnInit } from '@angular/core';
import { Batch } from '../../../models/batch.model';
import { BatchService } from '../../../services/batch.service';

@Component({
  selector: 'app-all-batches',
  templateUrl: './all-batches.component.html',
  styleUrls: ['./all-batches.component.css']
})
export class AllBatchesComponent implements OnInit {

  batches: Batch[];

  constructor(private batchService: BatchService) { }

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    this.batchService.getBatchAll()
    .subscribe(batches => this.batches = batches);
  }

}
