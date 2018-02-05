import { Component, OnInit, Output, Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core/src/event_emitter';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ListService } from '../../../services/dashboard/list.service';
import { BatchService } from '../../../services/batch.service';
import { Batch } from '../../../models/batch.model';

@Component({
  selector: 'app-test-drop-emitter',
  templateUrl: './test-drop-emitter.component.html',
  styleUrls: ['./test-drop-emitter.component.css']
})
@Injectable()
export class TestDropEmitterComponent implements OnInit {

  batchId: number;
  batches: Batch[];
  constructor(private data: ListService, private listBatches: BatchService) { }

  ngOnInit() {
    this.data.currentBatchId.subscribe(batchId => this.batchId = batchId);
  }

  onChange(b: number) {
    this.data.changeBatchId(b);
  }

}
