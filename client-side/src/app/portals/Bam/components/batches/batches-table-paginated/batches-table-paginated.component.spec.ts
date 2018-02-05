import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchesTablePaginatedComponent } from './batches-table-paginated.component';

describe('BatchesTablePaginatedComponent', () => {
  let component: BatchesTablePaginatedComponent;
  let fixture: ComponentFixture<BatchesTablePaginatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchesTablePaginatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchesTablePaginatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
