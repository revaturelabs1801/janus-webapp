import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchesTableComponent } from './batches-table.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('BatchesTableComponent', () => {
  let component: BatchesTableComponent;
  let fixture: ComponentFixture<BatchesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchesTableComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
