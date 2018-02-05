import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/';
import { Batch } from '../../../models/batch.model';
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
  // If fewer than [automaticFilteringThreshold] batches, filtering will occur after every key press in search bar,
  // otherwise filtering only occurs when hitting enter or clicking search button
  automaticFiltering: boolean;
  automaticFilteringThreshold = 50; // Max num. batches before automatic filtering is disabled

  constructor(private filterBatchPipe: FilterBatchPipe) { }

  ngOnInit() {
    this.filtered = this.batches;
    this.automaticFiltering = (this.batches.length < this.automaticFilteringThreshold);
  }

  /**
   * Filters the displayed batches by the text in the search box
   * @param event event.target.value holds the text the batches are filtered by
   * @author Charlie Harris | 1712-dec10-java-steve
   */
  filterBatches(event) {
    this.filtered = this.filterBatchPipe.transform(this.batches, event.target.value);
  }


}
