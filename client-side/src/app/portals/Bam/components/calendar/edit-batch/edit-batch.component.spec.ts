import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBatchComponent } from './edit-batch.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Dependencies } from '../../../bam.test-observable.module';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { BatchService } from '../../../services/batch.service';
import { SessionService } from '../../../services/session.service';
import { UsersService } from '../../../services/users.service';
import { LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { convertToParamMap, ParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

class RouterStub {
  navigateByUrl(url: string) { return url; }
}

class ActivatedRouteStub {
  private subject = new BehaviorSubject(convertToParamMap(this.testParamMap));
  paramMap = this.subject.asObservable();

  private _testParamMap: ParamMap;
  get testParamMap() { return this._testParamMap; }
  set testParamMap(params: {}) {
    this._testParamMap = convertToParamMap(params);
    this.subject.next(this._testParamMap);
  }

  get snapshot() {
    return { paramMap: this.testParamMap };
  }
}
// This one was awful!
describe('EditBatchComponent', () => {
  let component: EditBatchComponent;
  let fixture: ComponentFixture<EditBatchComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule(Dependencies).compileComponents();
  // }), 1440000);
  
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ EditBatchComponent ],
      imports: [ HttpClientModule, RouterModule, BrowserAnimationsModule,
      RouterTestingModule.withRoutes([]) ],
      providers: [BatchService, SessionService, UsersService,
        LocationStrategy,
       // { provide: Router, useClass: RouterStub },
       // { provide: ActivatedRoute, useClass: ActivatedRouteStub }
       ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
