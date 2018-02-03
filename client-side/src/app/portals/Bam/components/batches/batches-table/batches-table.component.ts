import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/';
import { Batch } from '../../../models/batch.model';

@Component({
  selector: 'app-batches-table',
  templateUrl: './batches-table.component.html',
  styleUrls: ['./batches-table.component.css']
})
export class BatchesTableComponent implements OnInit {

  @Input() batches: Batch[];

  constructor() { }

  ngOnInit() {
  }

}
