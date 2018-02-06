import { Component, OnInit } from '@angular/core';
import { EditBatchService } from '../../services/edit-batch/edit-batch.service';
import { BamUser } from '../../models/bamuser.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-remove-associate-from-batch',
  templateUrl: './remove-associate-from-batch.component.html',
  styleUrls: ['./remove-associate-from-batch.component.css']
})

/**
 * Class for remove user table component
 * @author Patrick Kennedy
 * @author Shane Avery Sistoza
 * @batch 1712-Steve
 */
export class RemoveAssociateFromBatchComponent implements OnInit {

  associates: BamUser[];

  constructor(public editBatchService: EditBatchService, public usersService: UsersService) {
  }

  ngOnInit() {
    this.editBatchService.getUsersInBatch(4).subscribe(users => this.associates = users);
  }


  /**
   * Removes an associate from the current batch.
   *
   * @param      {BamUser}  user    The associate to remove.
   */
  removeUser(user: BamUser) {
    let i = 0;
    for (let associate of this.associates) {
      if (associate.userId === user.userId) {
        this.usersService.removeUserFromBatch(associate.userId).subscribe(users => this.associates = users);
        break;
      }
      i++;
    }
  }

}
