import { Component, OnInit, Input } from '@angular/core';
import { Batch } from '../../models/batch.model';
import { EditBatchService } from '../../services/edit-batch/edit-batch.service';
import { BatchType } from '../../models/batchtype.model';
import { Output } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-edit-batch',
  templateUrl: './edit-batch.component.html',
  styleUrls: ['./edit-batch.component.css']
})
export class EditBatchComponent implements OnInit {

  @Input() batch: Batch = new Batch(null, null, null, null, null, null);
  batchTypes: BatchType[];

  showAddUserTable = false;

  constructor(public editBatchService: EditBatchService) {
  }

  toggleRemove() {
    this.showAddUserTable = false;
  }

  toggleAdd() {
    this.showAddUserTable = true;
  }

  submit(typeId) {

    let selected_type: BatchType;
    for (let i = 0; i < this.batchTypes.length; i++) {
      if (typeId === this.batchTypes[i].id) {
        selected_type = this.batchTypes[i];
        break;
      }
    }
    this.batch.type = selected_type;

    console.log(JSON.stringify(this.batch));
  }

  private endDateChanged(newDate) {
    this.batch.endDate = new Date(newDate);
  }

  private startDateChanged(newDate) {
    this.batch.startDate = new Date(newDate);
  }

  ngOnInit() {
    this.editBatchService.getBatchById(4).subscribe( batch => this.batch = batch);
    this.editBatchService.getAllBatchTypes().subscribe( types => this.batchTypes = types);
  }
}
