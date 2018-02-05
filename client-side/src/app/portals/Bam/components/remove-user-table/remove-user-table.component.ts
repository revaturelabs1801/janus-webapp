import { Component, OnInit } from '@angular/core';
import { EditBatchService } from '../../services/edit-batch/edit-batch.service';
import { BamUser } from '../../models/bamuser.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-remove-user-table',
  templateUrl: './remove-user-table.component.html',
  styleUrls: ['./remove-user-table.component.css']
})
export class RemoveUserTableComponent implements OnInit {

  associates: BamUser[];

  constructor(public editBatchService: EditBatchService, public usersService : UsersService) {
  }

  ngOnInit() {
    this.editBatchService.getUsersInBatch(4).subscribe(users => this.associates = users);
  }


  //TODO: call API 
  removeUser(user: BamUser) {
    let i = 0;
    for (let associate of this.associates) {
      if (associate.userId === user.userId) {
        //this.associates.splice(i, 1);
        this.usersService.removeUserFromBatch(associate.userId).subscribe(users => this.associates = users);
        break;
      }
      i++;
    }
  }

}
