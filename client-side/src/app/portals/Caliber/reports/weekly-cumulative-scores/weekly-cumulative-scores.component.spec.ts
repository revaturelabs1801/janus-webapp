import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyCumulativeScoreComponent } from './weekly-cumulative-scores.component';
import { HttpClientModule } from '@angular/common/http';
import { GranularityService } from '../services/granularity.service';
import { PDFService } from '../../../services/pdf.service';
import { ReportingService } from '../../../services/reporting.service';
import { AlertsService } from '../../services/alerts.service';
import { GraphDataPipe } from '../../pipes/graph-data.pipe';
import { GraphComponent } from '../graph/graph.component';
import { TableComponent } from '../table/table.component';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';

describe('WeeklyCumulativeScoreComponent', () => {
  let component: WeeklyCumulativeScoreComponent;
  let fixture: ComponentFixture<WeeklyCumulativeScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WeeklyCumulativeScoreComponent, 
        GraphDataPipe,
        GraphComponent,
        TableComponent,
        BaseChartDirective
      ],
      imports: [
        HttpClientModule
      ],
      providers: [
        GranularityService,
        PDFService,
        ReportingService,
        AlertsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyCumulativeScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});