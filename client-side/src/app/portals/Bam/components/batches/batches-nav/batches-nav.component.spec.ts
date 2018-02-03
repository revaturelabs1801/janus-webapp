import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchesNavComponent } from './batches-nav.component';

describe('BatchesNavComponent', () => {
  let component: BatchesNavComponent;
  let fixture: ComponentFixture<BatchesNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchesNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchesNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
