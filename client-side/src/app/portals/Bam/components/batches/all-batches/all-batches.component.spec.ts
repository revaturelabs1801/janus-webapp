import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Batch } from '../../../models/batch.model';
import { BatchService } from '../../../services/batch.service';
import { AllBatchesComponent } from './all-batches.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AllBatchesComponent', () => {
  let component: AllBatchesComponent;
  let fixture: ComponentFixture<AllBatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBatchesComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [BatchService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
