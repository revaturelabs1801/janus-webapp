import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BamRoutingModule } from './bam-routing.module';

import { BamComponent } from './bam.component';
import { HomeComponent } from './components/home/home.component';
import { EditBatchComponent } from './components/edit-batch/edit-batch.component';
import { AddUserTableComponent } from './components/add-user-table/add-user-table.component';
import { RemoveUserTableComponent } from './components/remove-user-table/remove-user-table.component';
import { EditBatchService } from './services/edit-batch/edit-batch.service';

@NgModule({
  imports: [
    CommonModule,
    BamRoutingModule,
    FormsModule
  ],
  declarations: [
    BamComponent,
    HomeComponent,
    EditBatchComponent,
    AddUserTableComponent,
    RemoveUserTableComponent
  ],
  providers: [
    EditBatchService
  ]
})
export class BamModule { }
