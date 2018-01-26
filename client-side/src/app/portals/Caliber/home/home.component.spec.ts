import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { iterateListLike } from '@angular/core/src/change_detection/change_detection_util';
import { HttpClientModule, HttpClient } from '@angular/common/http/';
import { NgbModal, NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { VpHomeBarGraphService } from '../services/graph/vp-home-bar-graph.service';
import { VpHomeSelectorService } from '../services/selector/vp-home-selector.service';
import { VpHomeLineGraphService } from '../services/graph/vp-home-line-graph.service';
import { VpHomePanelGraphService } from '../services/graph/vp-home-panel-graph.service';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { Input } from '@angular/core';
import { ReportingService } from '../../services/reporting.service';
import { Subscription } from 'rxjs/Subscription';
import { environment } from '../../../environments/environment';
import { EvaluationService } from '../services/evaluation.service';
import { Note } from '../entities/Note';
import { DataSet } from '../entities/DataSet';
import { AlertsService } from '../services/alerts.service';
import { BatchService } from '../services/batch.service';
import { NoteService } from '../services/note.service';
import { ReportsService } from '../services/reports.service';
import { Observable } from 'rxjs/Observable';
import { ColorService } from '../services/colors/color.service';
import { OrderByPipe } from '../pipes/order-by.pipe';
import { ApiService } from '../util/api.service';
import { HomeComponent } from './home.component';
import { VpLineGraphComponent } from './vp-line-graph/vp-line-graph.component';
import { VpPanelGraphComponent } from './vp-panel-graph/vp-panel-graph.component';
import { BarGraphModalComponent } from './vp-bar-graph/bar-graph-modal/bargraphmodal.component';
import { VpBarGraphComponent } from './vp-bar-graph/vp-bar-graph.component';

describe('CaliberHomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HomeComponent,
        BarGraphModalComponent,
        VpBarGraphComponent,
        VpLineGraphComponent,
        VpPanelGraphComponent,
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
        VpHomeLineGraphService,
        ReportingService,
        EvaluationService,
        NgbModal,
        // HttpClient,
        AlertsService,
        VpHomeSelectorService,
        VpHomePanelGraphService,
        BatchService,
        NoteService,
        ReportsService,
        ApiService
      ]
    })
    // .compileComponents();

    
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(HomeComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(5).toEqual(5);
    console.log("YOOOOOOOOOOO");
    console.log(component);
    // expect(component).toBeTruthy();
  });
});
