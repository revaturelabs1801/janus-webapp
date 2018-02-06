import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { BatchSearchService } from '../../../services/batch-search.service';

@Component({
  selector: 'app-batches-search',
  templateUrl: './batches-search.component.html',
  styleUrls: ['./batches-search.component.css']
})
export class BatchesSearchComponent implements OnInit {

  constructor(private searchService: BatchSearchService) { }

  ngOnInit() {
  }

  /**
   * Sends the contents of the search box to the BatchSearchService
   * @param event event.target.value holds the search box text
   * @author Charlie Harris | 1712-dec10-java-steve
   */
  sendFilterText(event) {
    this.searchService.sendMessage(event.target.value);
  }

}
