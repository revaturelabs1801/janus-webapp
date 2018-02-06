import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BamRoutingModule } from './bam-routing.module';
import { BamComponent } from './bam.component';
import { HomeComponent } from './components/home/home.component';
import { AllBatchesComponent } from './components/batches/all-batches/all-batches.component';
import { BatchesTableComponent } from './components/batches/batches-table/batches-table.component';
import { MyBatchesComponent } from './components/batches/my-batches/my-batches.component';
import { BatchService } from './services/batch.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterBatchPipe } from './Pipes/filter-batch.pipe';
import { DatePipe } from '@angular/common';
import { SessionService } from './services/session.service';
import { UsersService } from './services/users.service';
import { MainCurriculumViewComponent } from './components/curriculum-editor/main-curriculum-view/main-curriculum-view.component';
import { TopicPoolComponent } from './components/curriculum-editor/topic-pool/topic-pool.component';
import { CurriculumService } from './services/curriculum.service';
import { BatchesSearchComponent } from './components/batches/batches-search/batches-search.component';
import { BatchSearchService } from './services/batch-search.service';
import { DragDropModule } from 'primeng/dragdrop';

@NgModule({
  imports: [
    DragDropModule,
    CommonModule,
    BamRoutingModule,
    NgbModule.forRoot(),
  ],
  declarations: [
    BamComponent,
    HomeComponent,
    MainCurriculumViewComponent,
    TopicPoolComponent,
    MyBatchesComponent,
    AllBatchesComponent,
    BatchesTableComponent,
    BatchesSearchComponent,
  ],
  providers: [
    SessionService,
    UsersService,
    CurriculumService,
    BatchService,
    BatchSearchService,
    FilterBatchPipe,
    DatePipe
  ]
})
export class BamModule { }
