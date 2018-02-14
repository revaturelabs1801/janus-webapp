import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { UsersService } from '../../../services/users.service';
import { BamUser } from '../../../models/bamuser.model';
import { SearchPipe } from '../../../pipes/search.pipe';
import { Ng2OrderPipe } from 'ng2-order-pipe';
import { SessionService } from '../../../services/session.service';
import { BatchService } from '../../../services/batch.service';
import { Batch } from '../../../models/batch.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-associates',
  templateUrl: './view-associates.component.html',
  styleUrls: ['./view-associates.component.css']
})
/**
 * This component is for viewing all the associates in a batch.
 * @author Cristian Hermida | 1712-dec10-java-steve
 * @author Jeffery Camacho | 1712-dec10-java-steve
 */
export class ViewAssociatesComponent implements OnInit {
  p: number = 1;
  associateList: BamUser[] = [] ;
  searchTerm: string;
  order: string = 'fName';
  reverse: boolean = false;
  sessionUser: BamUser;
  currentBatch: Batch;
  constructor(private usersService: UsersService, private sessionService: SessionService, private batchservice: BatchService) { }

  ngOnInit() {
    this.loadAssociates();
  }

  /**
   * Gets the trainers associate in the batch
   */
  loadAssociates() {
    this.currentBatch = JSON.parse(sessionStorage.getItem('batch'));
    if (this.currentBatch != null) {
      this.usersService.getUsersInBatch(this.currentBatch.id).subscribe(data => {
        console.log(data);
        this.associateList = data;
      });
    }
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

}
