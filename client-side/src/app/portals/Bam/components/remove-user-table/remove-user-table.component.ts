import { Component, OnInit } from '@angular/core';
import { EditBatchService } from '../../services/edit-batch/edit-batch.service';
import { BamUser } from '../../models/bamuser.model';

@Component({
  selector: 'app-remove-user-table',
  templateUrl: './remove-user-table.component.html',
  styleUrls: ['./remove-user-table.component.css']
})
export class RemoveUserTableComponent implements OnInit {

  associates: BamUser[];

  constructor(public editBatchService: EditBatchService) {
  }

  ngOnInit() {
    this.editBatchService.getUsersInBatch(4).subscribe(users => this.associates = users);
  }

  removeUser(userId: number) {
    var i = 0;
    for (var associate of this.associates) {
      if (associate.userId == userId) {
        this.associates.splice(i, 1);
        break;
      }
    }
  }

}
