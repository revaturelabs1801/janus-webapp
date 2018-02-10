import { Component, OnInit } from '@angular/core';
import { SearchTextService } from '../../../services/search-text.service';

@Component({
  selector: 'app-subtopic-search',
  templateUrl: './subtopic-search.component.html',
  styleUrls: ['./subtopic-search.component.css']
})
export class SubtopicSearchComponent implements OnInit {

  searchText: string;

  constructor(private textService: SearchTextService) { }

  ngOnInit() {
    this.textService.getMessage().subscribe(data => {
      if (data.type === 'clear') {
        this.searchText = '';
      }
    });
  }

  sendSearchText() {
    this.textService.sendMessage(this.searchText, 'subtopic');
  }



}
