import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BamRoutingModule } from './bam-routing.module';

import { BamComponent } from './bam.component';
import { BatchProgressBarComponent } from './components/dashboard/batch-progress-bar/batch-progress-bar.component';
import { HomeComponent } from './components/home/home.component';
import { AllBatchesComponent } from './components/batches/all-batches/all-batches.component';
import { BatchesTableComponent } from './components/batches/batches-table/batches-table.component';
import { MyBatchesComponent } from './components/batches/my-batches/my-batches.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterBatchPipe } from './Pipes/filter-batch.pipe';
import { DatePipe } from '@angular/common';
import { DashboardInfoComponent } from './components/dashboard/dashboardinfo/dashboardinfo.component';
import { WelcomeComponent } from './components/dashboard/welcome/welcome.component';
import { LoadingSpinnerComponent } from './components/dashboard/ui/loading-spinner/loading-spinner.component';
import { CalendarService } from './services/calendar.service';
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
import { BatchesSearchComponent } from './components/batches/batches-search/batches-search.component';
import { BatchSearchService } from './services/batch-search.service';

@NgModule({
  imports: [
    CommonModule,
    BamRoutingModule,
    NgbModule.forRoot(),
    FormsModule
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
    BatchSearchService,
    FilterBatchPipe,
    DatePipe,
    EditBatchComponent,
    AddAssociateToBatchComponent,
    RemoveAssociateFromBatchComponent,
    MainCurriculumViewComponent,
    TopicPoolComponent,
    BatchProgressBarComponent,
    LoadingSpinnerComponent,
    WelcomeComponent,
    DashboardInfoComponent,
    UsersService,
    BatchService,
    SessionService,
    CurriculumService,
    CalendarService,
    SearchPipe
  ],
  exports: [
    SearchPipe
  ]
})
export class BamModule { }
