import { Component, OnInit } from '@angular/core';
import { SearchTextService } from '../../../services/search-text.service';

@Component({
  selector: 'app-topic-search',
  templateUrl: './topic-search.component.html',
  styleUrls: ['./topic-search.component.css']
})
export class TopicSearchComponent implements OnInit {

  constructor(private textService: SearchTextService) { }

  ngOnInit() {
  }


  sendSearchText(event) {
    this.textService.sendMessage(event);
  }

}
