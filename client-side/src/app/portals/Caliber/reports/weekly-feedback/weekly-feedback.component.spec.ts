import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyFeedbackComponent } from './weekly-feedback.component';
import { HttpClientModule } from '@angular/common/http';
import { ReportingService } from '../../../services/reporting.service';
import { GranularityService } from '../services/granularity.service';
import { NoteService } from '../../services/note.service';
import { ArrToStringPipe } from '../../pipes/arr-to-string.pipe';
import { AlertsService } from '../../services/alerts.service';
import { Trainee } from '../../entities/Trainee';


describe('WeeklyFeedbackComponent', () => {
  let component: WeeklyFeedbackComponent;
  let fixture: ComponentFixture<WeeklyFeedbackComponent>;
  let trainee: Trainee;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WeeklyFeedbackComponent, 
        ArrToStringPipe
      ],
      imports: [ 
        HttpClientModule
      ],
      providers: [ 
        ReportingService, 
        GranularityService, 
        NoteService,
        AlertsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});