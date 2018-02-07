import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchProgressBarComponent } from './batch-progress-bar.component';

describe('BatchProgressBarComponent', () => {
  let component: BatchProgressBarComponent;
  let fixture: ComponentFixture<BatchProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
