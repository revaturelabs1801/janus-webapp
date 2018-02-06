import { Component, OnInit } from '@angular/core';
import { EditBatchService } from '../../services/edit-batch/edit-batch.service';
import { BamUser } from '../../models/bamuser.model';

@Component({
  selector: 'app-add-user-table',
  templateUrl: './add-user-table.component.html',
  styleUrls: ['./add-user-table.component.css']
})

/**
 * Class for adding an associate to the a batch.
 * @author Patrick Kennedy
 * @author Shane Avery Sistoza
 * @batch 1712-Steve
 *
 */
export class AddUserTableComponent implements OnInit {

  associates: BamUser[];

  constructor(public editBatchService: EditBatchService) {
  }

  ngOnInit() {
    this.editBatchService.getUsersNotInBatch(4).subscribe(users => this.associates = users);
  }

  //TODO: add user to api
  addUser(user: BamUser) {
    let i = 0;
    for (let associate of this.associates) {
      if (associate.userId === user.userId) {
        //TODO: add user to api
        break;
      }
      i++;
    }
  }

}
