import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './services/pipe.filter';
import { FormsModule } from '@angular/forms';
import { BamRoutingModule } from './bam-routing.module';

import { BamComponent } from './bam.component';
import { HomeComponent } from './components/home/home.component';
import { ViewAssociatesComponent } from './components/view-associates/view-associates.component';
import { SortPipe } from './services/pipe.sort';
import { EditBatchComponent } from './components/edit-batch/edit-batch.component';
import { AddAssociateToBatchComponent } from './components/add-associate-to-batch/add-associate-to-batch.component';
import { RemoveAssociateFromBatchComponent } from './components/remove-associate-from-batch/remove-associate-from-batch.component';
import { BatchService } from './services/batch.service';
import { SearchPipe } from './pipes/search.pipe';
import { SessionService } from './services/session.service';
import { UsersService } from './services/users.service';
import { MainCurriculumViewComponent } from './components/curriculum-editor/main-curriculum-view/main-curriculum-view.component';
import { TopicPoolComponent } from './components/curriculum-editor/topic-pool/topic-pool.component';
import { CurriculumService } from './services/curriculum.service';
import { UserSearchPipe } from './pipes/user-search.pipe';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    BamRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  declarations: [
    BamComponent,
    HomeComponent,
    EditBatchComponent,
    AddAssociateToBatchComponent,
    RemoveAssociateFromBatchComponent,
    MainCurriculumViewComponent,
    TopicPoolComponent,
    SearchPipe,
    ViewAssociatesComponent,
    UserSearchPipe
  ],
  providers: [
    UsersService,
    BatchService,
    SessionService,
    CurriculumService
  ],
  exports: [
    SearchPipe, UserSearchPipe
  ]
})
export class BamModule { }
