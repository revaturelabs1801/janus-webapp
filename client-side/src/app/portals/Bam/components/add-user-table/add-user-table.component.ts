import { Component, OnInit } from '@angular/core';
import { EditBatchService } from '../../services/edit-batch/edit-batch.service';
import { BamUser } from '../../models/bamuser.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-add-user-table',
  templateUrl: './add-user-table.component.html',
  styleUrls: ['./add-user-table.component.css']
})
export class AddUserTableComponent implements OnInit {

  associates: BamUser[];

  constructor(public editBatchService: EditBatchService, public usersService: UsersService) {
  }

  ngOnInit() {
    this.editBatchService.getUsersNotInBatch(4).subscribe(users => this.associates = users);
  }

  addUser(user: BamUser) {
    let i = 0;
    for (let associate of this.associates) {
      if (associate.userId === user.userId) {
        this.usersService.addUserToBatch(4, associate.userId).subscribe(users => this.associates = users);
        break;
      }
      i++;
    }
  }

}
