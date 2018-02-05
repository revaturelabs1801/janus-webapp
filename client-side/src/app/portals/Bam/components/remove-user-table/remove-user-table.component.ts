import { Component, OnInit } from '@angular/core';
import { EditBatchService } from '../../services/edit-batch/edit-batch.service';

@Component({
  selector: 'app-remove-user-table',
  templateUrl: './remove-user-table.component.html',
  styleUrls: ['./remove-user-table.component.css']
})
export class RemoveUserTableComponent implements OnInit {

  constructor(editBatchService: EditBatchService) {
    editBatchService.getUsersInBatch(0).subscribe(
      types => {console.log(types); }
    );
   }

  ngOnInit() {
  }

}
