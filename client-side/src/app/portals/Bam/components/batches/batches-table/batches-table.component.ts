import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/';
import { Batch } from '../../../models/batch.model';
import { FilterBatchPipe } from '../../../Pipes/filter-batch.pipe';
import { BatchSearchService } from '../../../services/batch-search.service';

@Component({
  selector: 'app-batches-table',
  templateUrl: './batches-table.component.html',
  styleUrls: ['./batches-table.component.css']
})
export class BatchesTableComponent implements OnInit {

  @Input() batches: Batch[];
  @Input() title: string;

  filtered: Batch[];
  filterText: string;

  constructor(private filterBatchPipe: FilterBatchPipe, private searchService: BatchSearchService) { }

  ngOnInit() {
    this.filtered = this.batches;
    this.searchService.getMessage().subscribe(msg => this.filterBatches(msg.text));
  }

  /**
   * Filters the displayed batches by [filterText]
   * @param filterText
   * @author Charlie Harris | 1712-dec10-java-steve
   */
  filterBatches(filterText) {
    this.filtered = this.filterBatchPipe.transform(this.batches, filterText);
  }

  /**
   * UNIMPLEMENTED
   * on-click function for batch
   * @author Charlie Harris | 1712-dec10-java-steve
   */
  viewBatch() {
  }


}
