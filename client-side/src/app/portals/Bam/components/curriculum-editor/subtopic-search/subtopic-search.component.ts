import { Component, OnInit } from '@angular/core';
import { SearchTextService } from '../../../services/search-text.service';

@Component({
  selector: 'app-subtopic-search',
  templateUrl: './subtopic-search.component.html',
  styleUrls: ['./subtopic-search.component.css']
})
export class SubtopicSearchComponent implements OnInit {

  constructor(private textService: SearchTextService) { }

  ngOnInit() {
  }

  sendSearchText(event) {
    this.textService.sendMessage(event, 'subtopic');
  }

}
