import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BamRoutingModule } from './bam-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BamComponent } from './bam.component';
import { HomeComponent } from './components/home/home.component';
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
import { AddSubtopicComponent } from './components/calendar-view/add-subtopic/add-subtopic.component';
import { AddSubtopicService } from './services/add-subtopic.service';


@NgModule({
  imports: [
    CommonModule,
    BamRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
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
    AddSubtopicComponent
  ],
  providers: [
    UsersService, 
    BatchService, 
    SessionService, 
    CurriculumService,
    AddSubtopicService
  ], 
  exports: [
    SearchPipe
  ]
})
export class BamModule { }
