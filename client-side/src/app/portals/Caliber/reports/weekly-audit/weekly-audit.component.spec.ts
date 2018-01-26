import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyAuditComponent } from './weekly-audit.component';
import { OrderByPipe } from '../../pipes/order-by.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AlertsService } from '../../services/alerts.service';
import { GranularityService } from '../services/granularity.service';
import { NoteService } from '../../services/note.service';
import { ReportingService } from '../../../services/reporting.service';

describe('WeeklyAuditComponent', () => {
  let component: WeeklyAuditComponent;
  let fixture: ComponentFixture<WeeklyAuditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyAuditComponent, OrderByPipe ],
      imports: [
        HttpClientModule
      ],
      providers: [
        AlertsService,
        GranularityService,
        NoteService,
        ReportingService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});