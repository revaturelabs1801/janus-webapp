import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BamRoutingModule } from './bam-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BamComponent } from './bam.component';
import { BatchProgressBarComponent } from './components/dashboard/batch-progress-bar/batch-progress-bar.component';
import { HomeComponent } from './components/home/home.component';
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
import { CalendarComponent } from './components/calendar/calendar-view/calendar.component';
import { AddSubtopicComponent } from './components/calendar/add-subtopic/add-subtopic.component';
import { AddSubtopicService } from './services/add-subtopic.service';

import { ScheduleModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    BamRoutingModule,
    FormsModule,
    ScheduleModule,
    CalendarModule,
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
    BatchProgressBarComponent,
    LoadingSpinnerComponent,
    DashboardInfoComponent,
    CalendarComponent,
    WelcomeComponent,
    AddSubtopicComponent,
    SearchPipe

  ],
  providers: [
    UsersService, 
    BatchService, 
    SessionService, 
    CurriculumService,
    CalendarService,
    AddSubtopicService
  ], 
 
  exports: [
    SearchPipe
  ]
})
export class BamModule { }
