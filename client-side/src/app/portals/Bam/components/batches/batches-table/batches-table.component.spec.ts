import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchesTableComponent } from './batches-table.component';

describe('BatchesTableComponent', () => {
  let component: BatchesTableComponent;
  let fixture: ComponentFixture<BatchesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchesTableComponent ]
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
