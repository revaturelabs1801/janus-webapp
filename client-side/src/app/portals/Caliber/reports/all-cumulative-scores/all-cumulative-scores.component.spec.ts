import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http/';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ReportingService } from '../../../services/reporting.service';
import { PDFService } from '../../../services/pdf.service';
import { GranularityService } from '../services/granularity.service';

import { GraphDataPipe } from '../../pipes/graph-data.pipe';

import { GraphComponent } from '../graph/graph.component';
import { TableComponent } from '../table/table.component';
import { AllCumulativeScoresComponent } from './all-cumulative-scores.component';

import { Dependencies } from '../../caliber.test.module';


describe('AllCumulativeScoresComponent', () => {
  let component: AllCumulativeScoresComponent;
  let fixture: ComponentFixture<AllCumulativeScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies).compileComponents();
  }), 1440000);

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCumulativeScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ 
  //       AllCumulativeScoresComponent,
  //       GraphComponent,
  //       TableComponent,
  //       GraphDataPipe
  //     ],
  //     imports: [
  //       HttpClientModule,
  //       ChartsModule
  //     ],
  //     providers: [
  //       ReportingService,
  //       PDFService,
  //       GranularityService
  //     ]
  //   })
  //   .compileComponents();
  // }));