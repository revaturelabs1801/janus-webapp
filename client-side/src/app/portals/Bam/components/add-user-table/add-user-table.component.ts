import { Component, OnInit } from '@angular/core';
import { EditBatchService } from '../../services/edit-batch/edit-batch.service';
import { BamUser } from '../../models/bam-user.model';

@Component({
  selector: 'app-add-user-table',
  templateUrl: './add-user-table.component.html',
  styleUrls: ['./add-user-table.component.css']
})
export class AddUserTableComponent implements OnInit {

  associates : BamUser[]; 

  constructor(editBatchService: EditBatchService) {
    editBatchService.getUsersNotInBatch(0).subscribe(
      users => {this.associates = users; console.log(this.associates); }
    );
   }

  ngOnInit() {
  }

}
