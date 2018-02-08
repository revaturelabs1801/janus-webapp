import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchesSearchComponent } from './batches-search.component';

describe('BatchesSearchComponent', () => {
  let component: BatchesSearchComponent;
  let fixture: ComponentFixture<BatchesSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchesSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
