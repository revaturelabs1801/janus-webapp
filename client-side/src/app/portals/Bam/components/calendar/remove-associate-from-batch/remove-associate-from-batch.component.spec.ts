import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveAssociateFromBatchComponent } from './remove-associate-from-batch.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Dependencies } from '../../../bam.test-observable.module';

describe('RemoveAssociateFromBatchComponent', () => {
  let component: RemoveAssociateFromBatchComponent;
  let fixture: ComponentFixture<RemoveAssociateFromBatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies).compileComponents();
  }), 1440000);

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveAssociateFromBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
