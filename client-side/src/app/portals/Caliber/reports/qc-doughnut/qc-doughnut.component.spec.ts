import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcDoughnutComponent } from './qc-doughnut.component';
import { GranularityService } from '../services/granularity.service';
import { ReportingService } from '../../../services/reporting.service';
import { PDFService } from '../../../services/pdf.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertsService } from '../../services/alerts.service';
import { GraphComponent } from '../graph/graph.component';
import { TableComponent } from '../table/table.component';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import { GraphDataPipe } from '../../pipes/graph-data.pipe';

describe('QcDoughnutComponent', () => {
  let component: QcDoughnutComponent;
  let fixture: ComponentFixture<QcDoughnutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        QcDoughnutComponent, 
        BaseChartDirective,
        GraphComponent,
        TableComponent,
        GraphDataPipe
      ],
      imports: [
        HttpClientModule
      ],
      providers: [
        GranularityService,
        ReportingService,
        PDFService,
        AlertsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcDoughnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});