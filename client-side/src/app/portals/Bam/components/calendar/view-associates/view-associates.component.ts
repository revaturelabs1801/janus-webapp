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
 * @author Cristian Hermida
 * @author Jeffery Camacho
 */
export class ViewAssociatesComponent implements OnInit {
  p: number = 1;
  associateList: BamUser[];
  searchTerm: string;
  order: string = 'fName';
  reverse: boolean = false;
  sessionUser: BamUser;
  currentBatch: Batch;
  constructor(private usersService: UsersService, private sessionService: SessionService, private batchservice: BatchService) { }

  ngOnInit() {
    // this.loadAssociatesInBatch();
    console.log(this.currentBatch);
    this.loadAssociates();
  }

  /**
   * Gets the trainers associate in the batch
   */
  loadAssociatesInBatch() {
    this.usersService.getAllAssociates().subscribe(data => { console.log(data); this.associateList = data; });
  }

  loadAssociates() {
    this.currentBatch = JSON.parse(sessionStorage.getItem('batch'));
    if (this.currentBatch != null) {
      // hard coded the batch id because the data in the DB is inconsistent
      // this.currentBatch.id
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
