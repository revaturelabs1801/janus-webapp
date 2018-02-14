import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BamRoutingModule } from './bam-routing.module';

import { BamComponent } from './bam.component';
import { BatchProgressBarComponent } from './components/dashboard/batch-progress-bar/batch-progress-bar.component';
import { HomeComponent } from './components/home/home.component';
import { CurriculumWeekComponent } from './components/curriculum-editor/curriculum-week/curriculum-week.component';

import { ViewAssociatesComponent } from './components/calendar/view-associates/view-associates.component';
import { AllBatchesComponent } from './components/batches/all-batches/all-batches.component';
import { BatchesTableComponent } from './components/batches/batches-table/batches-table.component';
import { MyBatchesComponent } from './components/batches/my-batches/my-batches.component';
import { FilterBatchPipe } from './Pipes/filter-batch.pipe';
import { DashboardInfoComponent } from './components/dashboard/dashboardinfo/dashboardinfo.component';
import { WelcomeComponent } from './components/dashboard/welcome/welcome.component';
import { LoadingSpinnerComponent } from './components/dashboard/ui/loading-spinner/loading-spinner.component';
import { CalendarService } from './services/calendar.service';
import { EditBatchComponent } from './components/calendar/edit-batch/edit-batch.component';
import { AddAssociateToBatchComponent } from './components/calendar/add-associate-to-batch/add-associate-to-batch.component';
import { RemoveAssociateFromBatchComponent } from './components/calendar/remove-associate-from-batch/remove-associate-from-batch.component';
import { BatchService } from './services/batch.service';
import { SearchPipe } from './pipes/search.pipe';
import { OrderPipe } from './pipes/order.pipe';
import { SessionService } from './services/session.service';
import { UsersService } from './services/users.service';
import { MainCurriculumViewComponent } from './components/curriculum-editor/main-curriculum-view/main-curriculum-view.component';
import { TopicPoolComponent } from './components/curriculum-editor/topic-pool/topic-pool.component';
import { CourseStructureComponent } from './components/curriculum-editor/course-structure/course-structure.component';
import { CurriculumService } from './services/curriculum.service';
import { CalendarComponent } from './components/calendar/calendar-view/calendar.component';
import { AddSubtopicComponent } from './components/calendar/add-subtopic/add-subtopic.component';
import { DragndropService } from './services/dragndrop.service';
import { TopicSearchComponent } from './components/curriculum-editor/topic-search/topic-search.component';
import { SearchTextService } from './services/search-text.service';

import { NgxPaginationModule } from 'ngx-pagination';
import { BatchesSearchComponent } from './components/batches/batches-search/batches-search.component';
import { AddSubtopicService } from './services/add-subtopic.service';
import { CalendarStatusService } from './services/calendar-status.service';

import { ScheduleModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/primeng';
import { DragDropModule } from 'primeng/primeng';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { OverlayPanelModule } from 'primeng/primeng';
import { SubtopicSearchComponent } from './components/curriculum-editor/subtopic-search/subtopic-search.component';
import { TopicService } from './services/topic.service';
import { SubtopicService } from './services/subtopic.service';
import { DeleteSubtopicModalComponent } from './components/calendar/delete-subtopic-modal/delete-subtopic-modal.component';
import { ExistingSubtopicModalComponent } from './components/calendar/existing-subtopic-modal/existing-subtopic-modal.component';


@NgModule({
  imports: [
    CommonModule,
    BamRoutingModule,
    FormsModule,
    NgxPaginationModule,
    Ng2OrderModule,
    ScheduleModule,
    DragDropModule,
    CalendarModule,
    OverlayPanelModule,
    NgbModule.forRoot()
  ],
  declarations: [
    BamComponent,
    HomeComponent,
    CurriculumWeekComponent,
    MainCurriculumViewComponent,
    TopicPoolComponent,
    CourseStructureComponent,
    MyBatchesComponent,
    AllBatchesComponent,
    BatchesTableComponent,
    BatchesSearchComponent,
    EditBatchComponent,
    WelcomeComponent,
    DashboardInfoComponent,
    BatchProgressBarComponent,
    LoadingSpinnerComponent,
    AddAssociateToBatchComponent,
    EditBatchComponent,
    RemoveAssociateFromBatchComponent,
    BatchProgressBarComponent,
    AddSubtopicComponent,
    LoadingSpinnerComponent,
    DashboardInfoComponent,
    ViewAssociatesComponent,
    CalendarComponent,
    ViewAssociatesComponent,
    CalendarComponent,
    AddSubtopicComponent,
    TopicSearchComponent,
    SubtopicSearchComponent,
    OrderPipe,
    SearchPipe,
    FilterBatchPipe,
    DeleteSubtopicModalComponent,
    ExistingSubtopicModalComponent
  ],
  providers: [
    CurriculumWeekComponent,
    DragndropService,
    CourseStructureComponent,
    SessionService,
    UsersService,
    EditBatchComponent,
    AddAssociateToBatchComponent,
    RemoveAssociateFromBatchComponent,
    MainCurriculumViewComponent,
    TopicPoolComponent,
    SearchPipe,
    ViewAssociatesComponent,
    BatchService,
    CurriculumService,
    CalendarService,
    AddSubtopicService,
    CalendarStatusService,
    SearchTextService,
    TopicService,
    SubtopicService
  ],
  exports: [
    SearchPipe,
    OrderPipe
  ]
})
export class BamModule { }
