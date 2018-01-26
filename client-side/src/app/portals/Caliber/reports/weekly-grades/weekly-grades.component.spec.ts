import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyGradesComponent } from './weekly-grades.component';
import { GranularityService } from '../services/granularity.service';
import { AssessmentService } from '../../services/assessment.service';
import { GradeService } from '../../services/grade.service';
import { NoteService } from '../../services/note.service';
import { ReportingService } from '../../../services/reporting.service';
import { OrderByPipe } from '../../pipes/order-by.pipe';
import { FilterByPipe } from '../../pipes/filter-by.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AlertsService } from '../../services/alerts.service';

describe('WeeklyGradesComponent', () => {
  let component: WeeklyGradesComponent;
  let fixture: ComponentFixture<WeeklyGradesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyGradesComponent, OrderByPipe, FilterByPipe ],
      imports: [
        HttpClientModule
      ],
      providers: [
        GranularityService,
        AssessmentService,
        GradeService,
        NoteService,
        ReportingService,
        AlertsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});