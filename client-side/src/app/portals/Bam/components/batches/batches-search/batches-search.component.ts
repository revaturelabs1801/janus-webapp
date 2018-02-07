import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-batches-search',
  templateUrl: './batches-search.component.html',
  styleUrls: ['./batches-search.component.css']
})
export class BatchesSearchComponent implements OnInit {

  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  filterText: string;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Sends the contents of the search box to the BatchSearchService
   * @author Charlie Harris | 1712-dec10-java-steve
   */
  sendFilterText() {
    this.change.emit(this.filterText);
  }

}
