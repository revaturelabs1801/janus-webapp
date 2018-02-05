import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/';
import { Batch } from '../../../models/batch.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-batches-table-paginated',
  templateUrl: './batches-table-paginated.component.html',
  styleUrls: ['./batches-table-paginated.component.css']
})
export class BatchesTablePaginatedComponent implements OnInit {

  @Input() batches: Batch[];
  @Input() title: string;
  @Input() numBatches: number;
  @Input() filterText: string;

  pageSize = 20; // Default page size
  pages: number;
  pagesIndex = [];
  currentPageIndex = 1; // Page indexing starts at 1
  currentPage: Batch[];

  constructor() { }

  ngOnInit() {
    this.pages = this.numBatches / this.pageSize;
    for (let i = 1; i <= this.pages; i++) {
      this.pagesIndex.push(i);
    }
    this.loadPage();
  }

  initTable(batches) {
  }

  loadPage() {
    this.currentPage = this.batches.slice(
      (this.currentPageIndex - 1) * this.pageSize, this.currentPageIndex * this.pageSize
    );
  }

  prevPage() {
    if (this.currentPageIndex > 1) {
      this.currentPageIndex--;
      this.loadPage();
    }
  }

  nextPage() {
    if (this.currentPageIndex < this.pages) {
      this.currentPageIndex++;
      this.loadPage();
    }
  }

}
