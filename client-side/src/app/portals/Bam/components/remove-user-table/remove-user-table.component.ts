import { Component, OnInit } from '@angular/core';
import { EditBatchService } from '../../services/edit-batch/edit-batch.service';
import { BamUser } from '../../models/bam-user.model';

@Component({
  selector: 'app-remove-user-table',
  templateUrl: './remove-user-table.component.html',
  styleUrls: ['./remove-user-table.component.css']
})
export class RemoveUserTableComponent implements OnInit {

  associates : BamUser[]; 

  constructor(editBatchService: EditBatchService) {
    editBatchService.getUsersInBatch(0).subscribe(
      users => {this.associates = users; console.log(this.associates); }
    );
   }

  ngOnInit() {
  }

}
