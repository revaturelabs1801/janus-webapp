import { Component, OnInit, Input } from '@angular/core';
import { BamUser } from '../../../models/bamuser.model';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-remove-associate-from-batch',
  templateUrl: './remove-associate-from-batch.component.html',
  styleUrls: ['./remove-associate-from-batch.component.css']
})

/**
 * Class for remove user table component
 * @author Patrick Kennedy | Batch: 1712-Steve
 * @author Shane Avery Sistoza | Batch: 1712-Steve
 * @batch 1712-Steve
 */
export class RemoveAssociateFromBatchComponent implements OnInit {

  associates: BamUser[];
  @Input() searchTerm: string;

  constructor(public usersService: UsersService) {
  }

  ngOnInit() {
    this.usersService.getUsersInBatch(4).subscribe(users => this.associates = users);
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
