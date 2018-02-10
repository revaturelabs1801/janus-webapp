import { Component, OnInit, Input } from '@angular/core';
import { BamUser } from '../../../models/bamuser.model';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-add-associate-to-batch',
  templateUrl: './add-associate-to-batch.component.html',
  styleUrls: ['./add-associate-to-batch.component.css']
})

/**
 * Class for adding an associate to the batch.
 * @author Patrick Kennedy | Batch: 1712-Steve
 * @author Shane Avery Sistoza | Batch: 1712-Steve
 *
 */
export class AddAssociateToBatchComponent implements OnInit {

  associates: BamUser[];
  @Input() searchTerm: string;
  @Input() associateAlertType: string;
  @Input() associateAlertMessage: string;

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.usersService.getUsersNotInBatch().subscribe(users => this.associates = users);
  }

  /**
   * Adds user to the batch.
   *
   * @param      {BamUser}  user    The user being added to the batch.
   */
  addUser(user: BamUser) {
    let i = 0;
    for (let associate of this.associates) {
      if (associate.userId === user.userId) {
        this.usersService.addUserToBatch(4, associate.userId).subscribe(users => {
          this.associates = users;
          this.associateAlert("success", `Added ${user.fName} ${user.lName} to current batch.`)
        });
        break;
      }
      i++;
    }
  }

  associateAlert(type, message) {
    this.associateAlertType = type;
    this.associateAlertMessage = message;
  }
}
