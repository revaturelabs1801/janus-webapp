// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavModule } from '../../nav/nav.module';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { HttpClient } from '@angular/common/http';
import { SimpleNotificationsModule } from 'angular2-notifications-lite';


// routing
import { routes } from './caliber.routes';
import { SpringInterceptor } from './interceptors/spring.interceptor';

// services
import { BatchService } from './services/batch.service';
import { TrainerService } from './services/trainer.service';
import { TraineeService } from './services/trainee.service';
import { EnvironmentService } from './services/environment.service';
import { AssessmentService } from './services/assessment.service';
import { RouteService } from './services/route.service';
import { PanelService } from './services/panel.service';
import { GradeService } from './services/grade.service';
import { NoteService } from './services/note.service';
import { GranularityService } from './components/reports/services/granularity.service';
import { CategoryService } from './services/category.service';
import { SkillService } from './services/skill.service';
import { TrainingTypeService } from './services/training-type.service';
import { ColorService } from './services/colors/color.service';
import { VpHomeLineGraphService } from './services/graph/vp-home-line-graph.service';
import { VpHomeSelectorService } from './services/selector/vp-home-selector.service';
import { CategoriesService } from './services/categories.service';
import { LocationService } from './services/location.service';
import { VpHomeBarGraphService } from './services/graph/vp-home-bar-graph.service';
import { VpHomePanelGraphService } from './services/graph/vp-home-panel-graph.service';
import { AlertsService } from './services/alerts.service';
import { EvaluationService } from './services/evaluation.service';
import { QCStatusService } from './services/qcstatus.service';
import { TraineeStatusService } from './services/trainee-status.service';

// pipes
import { GradeByTraineeByAssessmentPipe } from './pipes/grade-by-trainee-by-assessment.pipe';
import { CategorySkillPipe } from './pipes/category-skill.pipe';
import { GraphDataPipe } from './pipes/graph-data.pipe';
import { TierPipe } from './pipes/tier-pipe';
import { TrainerPipePipe } from './pipes/trainer-pipe.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { BatchByTrainerPipe } from './pipes/trainerbatch.pipe';
import { NoteByTraineeByWeekPipe } from './pipes/note-by-trainee-by-week.pipe';
import { DisplayBatchByYear } from './pipes/display-batch-by-year.pipe';
import { FilterByPipe } from './pipes/filter-by.pipe';
import { ToolbarFilterPipe } from './pipes/toolbar-filter.pipe';
import { AddressToStringPipe } from './pipes/address-to-string.pipe';
import { TraineeSearch } from './pipes/trainee-search.pipe';

// components
import { CaliberComponent } from './caliber.component';
import { HomeComponent } from './components/home/home.component';
import { AssessComponent } from './components/assess/assess.component';
import { NavComponent } from '../../nav/nav.component';
import { ManageComponent } from './components/manage/manage.component';
import { ReportsComponent } from './components/reports/reports.component';
import { AllCumulativeScoresComponent } from './components/reports/all-cumulative-scores/all-cumulative-scores.component';
import { TraineeTechSkillsComponent } from './components/reports/trainee-tech-skills/trainee-tech-skills.component';
import { ToolbarComponent } from './components/reports/toolbar/toolbar.component';
import { PanelComponent } from './components/panel/panel/panel.component';
import { OverallFeedbackComponent } from './components/reports/overall-feedback/overall-feedback.component';
import { TrainerProfilesComponent } from './components/settings/trainer-profile/trainer-profile.component';
import { PanelTableComponent } from './components/panel/panel-table/panel-table.component';
import { PanelSearchbarComponent } from './components/panel/panel-searchbar/panel-searchbar.component';
import { InterviewDetailsComponent } from './components/panel/interview-details/interview-details.component';
import { CreatePanelComponent } from './components/panel/create-panel/create-panel.component';
import { VpBarGraphComponent } from './components/home/vp-bar-graph/vp-bar-graph.component';
import { VpLineGraphComponent } from './components/home/vp-line-graph/vp-line-graph.component';
import { VpPanelGraphComponent } from './components/home/vp-panel-graph/vp-panel-graph.component';
import { SettingsComponent } from './components/settings/settings.component';
import { CategoriesComponent } from './components/settings/categories/categories.component';
import { LocationsComponent } from './components/settings/locations/locations.component';
import { TrainersComponent } from './components/settings/trainers/trainers.component';
import { DeactivateTrainerComponent } from './components/settings/trainers/deactivatetrainer/deactivatetrainer.component';
import { DeactivateLocationComponent } from './components/settings/locations/deactivatelocation/deactivatelocation.component';
import { EditlocationComponent } from './components/settings/locations/editlocation/editlocation.component';
import { CreatelocationComponent } from './components/settings/locations/createlocation/createlocation.component';
import { QualityComponent } from './components/quality/quality.component';
import { GraphComponent } from './components/reports/graph/graph.component';
import { TableComponent } from './components/reports/table/table.component';
import { PanelBatchAllTraineesComponent } from './components/reports/panel-batch-all-trainees/panel-batch-all-trainees.component';
import { QualityFeedbackComponent } from './components/quality/quality-feedback/quality-feedback.component';
import { BatchOverallLineChartComponent } from './components/reports/batch-overall-line-chart/batch-overall-line-chart.component';
import { PanelFeedbackComponent } from './components/reports/panel-feedback/panel-feedback.component';
import { AssessmentBreakdownComponent } from './components/reports/assessment-breakdown/assessment-breakdown.component';
import { WeeklyFeedbackComponent } from './components/reports/weekly-feedback/weekly-feedback.component';
import { WeeklyGradesComponent } from './components/reports/weekly-grades/weekly-grades.component';
import { WeeklyAuditComponent } from './components/reports/weekly-audit/weekly-audit.component';
import { WeeklyCumulativeScoreComponent } from './components/reports/weekly-cumulative-scores/weekly-cumulative-scores.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { ReactivateLocationComponent } from './components/settings/locations/reactivatelocation/reactivatelocation.component';
import { BarGraphModalComponent } from './components/home/vp-bar-graph/bar-graph-modal/bargraphmodal.component';
import { ReportsService } from './services/reports.service';
import { GeneralFeedbackComponent } from './components/panel/general-feedback/general-feedback.component';
import { TechnicalFeedbackComponent } from './components/panel/technical-feedback/technical-feedback.component';
import { QcDoughnutComponent } from './components/reports/qc-doughnut/qc-doughnut.component';
import { BatchModalComponent } from './components/manage/batch/batch-modal.component';
import { PanelOverallFeedbackComponent } from './components/panel/overall-feedback/panel-overall-feedback.component';
import { FeedbackIconComponent } from './components/quality/feedback-icon/feedback-icon.component';
import { QualityOverallFeedbackComponent } from './components/quality/quality-overall-feedback/quality-overall-feedback.component';
import { TraineeLineChartComponent } from './components/reports/trainee-line-chart/trainee-line-chart.component';
import { ArrToStringPipe } from './pipes/arr-to-string.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forChild(routes),
    FormsModule,
    ChartsModule,
    ReactiveFormsModule,
    SimpleNotificationsModule.forRoot(),
  ],
  declarations: [
    // pipes
    GraphDataPipe,
    PanelBatchAllTraineesComponent,
    GradeByTraineeByAssessmentPipe,
    DisplayBatchByYear,
    BatchByTrainerPipe,
    CategorySkillPipe,
    NoteByTraineeByWeekPipe,
    TierPipe,
    TrainerPipePipe,
    OrderByPipe,
    GradeByTraineeByAssessmentPipe,
    BatchByTrainerPipe,
    GeneralFeedbackComponent,
    TechnicalFeedbackComponent,
    AddressToStringPipe,
    GraphDataPipe,
    OrderByPipe,
    FilterByPipe,
    ToolbarFilterPipe,
    TraineeSearch,
    ArrToStringPipe,

    // components
    CaliberComponent,
    HomeComponent,
    AssessComponent,
    ManageComponent,
    ReportsComponent,
    AllCumulativeScoresComponent,
    VpBarGraphComponent,
    VpLineGraphComponent,
    VpPanelGraphComponent,
    SettingsComponent,
    CategoriesComponent,
    TrainersComponent,
    LocationsComponent,
    DeactivateTrainerComponent,
    DeactivateLocationComponent,
    EditlocationComponent,
    CreatelocationComponent,
    PanelComponent,
    QualityComponent,
    TraineeTechSkillsComponent,
    ToolbarComponent,
    GraphComponent,
    TableComponent,
    TrainerProfilesComponent,
    PanelComponent,
    OverallFeedbackComponent,
    QualityFeedbackComponent,
    PanelBatchAllTraineesComponent,
    BatchOverallLineChartComponent,
    AssessmentBreakdownComponent,
    WeeklyFeedbackComponent,
    WeeklyGradesComponent,
    PanelFeedbackComponent,
    WeeklyAuditComponent,
    WeeklyCumulativeScoreComponent,
    QcDoughnutComponent,
    ReactivateLocationComponent,
    AlertsComponent,
    BarGraphModalComponent,
    PanelBatchAllTraineesComponent,
    PanelTableComponent,
    PanelSearchbarComponent,
    CreatePanelComponent,
    InterviewDetailsComponent,
    BatchModalComponent,
    GeneralFeedbackComponent,
    TechnicalFeedbackComponent,
    PanelOverallFeedbackComponent,
    FeedbackIconComponent,
    QualityOverallFeedbackComponent,

    // pipes
    GraphDataPipe,
    PanelBatchAllTraineesComponent,
    GradeByTraineeByAssessmentPipe,
    DisplayBatchByYear,
    BatchByTrainerPipe,
    CategorySkillPipe,
    NoteByTraineeByWeekPipe,
    TierPipe,
    TrainerPipePipe,
    OrderByPipe,
    GradeByTraineeByAssessmentPipe,
    BatchByTrainerPipe,
    GeneralFeedbackComponent,
    TechnicalFeedbackComponent,
    QcDoughnutComponent,
    TraineeLineChartComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpringInterceptor, multi: true },  // interceptor for all HTTP requests
    BatchService,
    EnvironmentService,
    TrainerService,
    TraineeService,
    AssessmentService,
    RouteService,
    PanelService,
    RouteService,
    GradeService,
    HttpClient,
    NoteService,
    VpHomeLineGraphService,
    VpHomeSelectorService,
    ColorService,
    TrainerService,
    LocationService,
    CategoryService,
    CategoriesService,
    GranularityService,
    AlertsService,
    VpHomeBarGraphService,
    VpHomePanelGraphService,
    EvaluationService,
    SkillService,
    TrainingTypeService,
    ReportsService,
    QCStatusService,
    TraineeStatusService,
  ],
  bootstrap: [
    TrainersComponent
  ],
  exports: [
    TraineeTechSkillsComponent,
  ],
  entryComponents: [
    BarGraphModalComponent,
    BatchModalComponent,
  ],
})
export class CaliberModule { }
