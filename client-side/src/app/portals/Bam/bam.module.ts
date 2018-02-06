import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BamRoutingModule } from './bam-routing.module';

import { BamComponent } from './bam.component';
import { HomeComponent } from './components/home/home.component';
import { EditBatchComponent } from './components/edit-batch/edit-batch.component';
import { AddAssociateToBatchComponent } from './components/add-associate-to-batch/add-associate-to-batch.component';
import { RemoveAssociateFromBatchComponent } from './components/remove-associate-from-batch/remove-associate-from-batch.component';
import { EditBatchService } from './services/edit-batch/edit-batch.service';
import { UsersService } from './services/users.service';

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
    AddAssociateToBatchComponent,
    RemoveAssociateFromBatchComponent
  ],
  providers: [
    EditBatchService,
    UsersService
  ]
})
export class BamModule { }
