import { Component, OnInit } from '@angular/core';
import { Batch } from '../../models/batch.model';
import { EditBatchService } from '../../services/edit-batch/edit-batch.service';
import { BatchType } from '../../models/batch-type.model';

@Component({
  selector: 'app-edit-batch',
  templateUrl: './edit-batch.component.html',
  styleUrls: ['./edit-batch.component.css']
})
export class EditBatchComponent implements OnInit {

  batch : Batch; 
  batchTypes : BatchType[]; 

  constructor(editBatchService: EditBatchService) {
    this.batch = new Batch(null, null, null, null, null); 
    editBatchService.getBatchById(4).subscribe(
      batches => { this.batch = batches; console.log(this.batch);  }
    ); 
    editBatchService.getAllBatchTypes().subscribe(
      types => { this.batchTypes = types; console.log(this.batchTypes);  }
    ); 
  }

  ngOnInit() {
  }

}
