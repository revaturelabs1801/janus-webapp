import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/';
import { Batch } from '../../../models/batch.model';

@Component({
  selector: 'app-batches-table',
  templateUrl: './batches-table.component.html',
  styleUrls: ['./batches-table.component.css']
})
export class BatchesTableComponent implements OnInit {

  @Input() batches: Batch[];
  @Input() title: string;
  @Input() filterText: string;

  filtered: Batch[];
  pageNum = 1;

  constructor() { }

  ngOnInit() {
    this.filtered = this.batches;
  }

  /**
   * UNIMPLEMENTED
   * on-click function for batch
   * @author Charlie Harris | 1712-dec10-java-steve
   */
  viewBatch() {
  }

}
