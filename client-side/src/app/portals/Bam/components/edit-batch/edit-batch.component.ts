import { Component, OnInit, Input } from '@angular/core';
import { Batch } from '../../models/batch.model';
import { EditBatchService } from '../../services/edit-batch/edit-batch.service';
import { BatchType } from '../../models/batch-type.model';
import { Output } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-edit-batch',
  templateUrl: './edit-batch.component.html',
  styleUrls: ['./edit-batch.component.css']
})
export class EditBatchComponent implements OnInit {

  @Input() batch: Batch;
  batchTypes: BatchType[];

  add = false;

  constructor(editBatchService: EditBatchService) {
    this.batch = new Batch(null, null, null, null, null);
    editBatchService.getBatchById(4).subscribe(
      batches => {
        this.batch = batches; console.log(this.batch);
      }
    );
    editBatchService.getAllBatchTypes().subscribe(
      types => { this.batchTypes = types; console.log(this.batchTypes); }
    );
  }

  ngOnInit() {
  }

  toggleRemove() {
    this.add = false;
  }

  toggleAdd() {
    this.add = true;
  }

  submit(typeId) {

    let selected_type: BatchType;
    //Get the appropriate type by id 
    for (var i = 0; i < this.batchTypes.length; i++) {
      if (typeId == this.batchTypes[i].id) {
        selected_type = this.batchTypes[i];
        break;
      }
    }
    this.batch.type = selected_type;

    console.log(JSON.stringify(this.batch));
  }

  private endDateChanged(newDate) {
    this.batch.endDate = new Date(newDate);
    console.log(this.batch.endDate); // <-- for testing
  }

  private startDateChanged(newDate) {
    this.batch.startDate = new Date(newDate);
    console.log("start date " + newDate);
    console.log(this.batch.startDate); // <-- for testing 
  }

}
