import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { BamUser } from '../../models/bamuser.model';


@Component({
  selector: 'app-view-associates',
  templateUrl: './view-associates.component.html',
  styleUrls: ['./view-associates.component.css']
})
export class ViewAssociatesComponent implements OnInit {

  associateList: BamUser[];
  constructor(private usersService: UsersService) { }
  /*
  *if current batch is null display nothing otherwise batch name
  */
  ngOnInit() {
    this.loadAssociatesInBatch();
  }

  loadAssociatesInBatch() {
    this.usersService.getAllAssociates().subscribe(data => {this.associateList = data; });
  }

}
