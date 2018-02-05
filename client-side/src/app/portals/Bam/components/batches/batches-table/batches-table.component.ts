import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/';
import { Batch } from '../../../models/batch.model';
import { Observable } from 'rxjs/Observable';
import { FilterBatchPipe } from '../../../Pipes/filter-batch.pipe';

@Component({
  selector: 'app-batches-table',
  templateUrl: './batches-table.component.html',
  styleUrls: ['./batches-table.component.css']
})
export class BatchesTableComponent implements OnInit {

  @Input() batches: Batch[];
  @Input() title: string;

  filtered: Batch[];
  automaticFiltering: boolean;
  automaticFilteringThreshold = 50; // Max num. batches before automatic filtering is disabled

  constructor(private filterBatchPipe: FilterBatchPipe) { }

  ngOnInit() {
    this.filtered = this.batches;
    this.automaticFiltering = (this.batches.length < this.automaticFilteringThreshold);
  }


  filterBatches(event) {
    this.filtered = this.filterBatchPipe.transform(this.batches, event.target.value);
  }


}
