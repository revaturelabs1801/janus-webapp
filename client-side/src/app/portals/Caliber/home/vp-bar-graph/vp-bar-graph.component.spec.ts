import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http/';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Input } from '@angular/core';
import { NgbModal, NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { BarGraphModalComponent } from './bar-graph-modal/bargraphmodal.component';
import { VpBarGraphComponent } from './vp-bar-graph.component';
import { VpHomeBarGraphService } from '../../services/graph/vp-home-bar-graph.service';
import { VpHomeSelectorService } from '../../services/selector/vp-home-selector.service';

import { ReportingService } from '../../../services/reporting.service';
import { Subscription } from 'rxjs/Subscription';
import { environment } from '../../../../environments/environment';
import { EvaluationService } from '../../services/evaluation.service';
import { AlertsService } from '../../services/alerts.service';
import { BatchService } from '../../services/batch.service';
import { NoteService } from '../../services/note.service';
import { ReportsService } from '../../services/reports.service';
import { Observable } from 'rxjs/Observable';
import { ColorService } from '../../services/colors/color.service';
import { OrderByPipe } from '../../pipes/order-by.pipe';
import { ApiService } from '../../util/api.service';


describe('VpBarGraphComponent', () => {
  let component: VpBarGraphComponent;
  let fixture: ComponentFixture<VpBarGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        VpBarGraphComponent,
        BarGraphModalComponent,
        OrderByPipe
       ],
      imports: [ 
        HttpClientModule,
        FormsModule,
        ChartsModule,
        NgbModule.forRoot() 
      ],
      providers: [
        NgbModal,
        NgbActiveModal,
        ColorService,
        VpHomeBarGraphService,
        ReportingService,
        EvaluationService,
        NgbModal,
        HttpClient,
        AlertsService,
        VpHomeSelectorService,
        BatchService,
        NoteService,
        ReportsService,
        ApiService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpBarGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
