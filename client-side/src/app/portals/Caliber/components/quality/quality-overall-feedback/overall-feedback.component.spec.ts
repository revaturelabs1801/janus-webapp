import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityOverallFeedbackComponent } from './quality-overall-feedback.component';

describe('QualityOverallFeedbackComponent', () => {
  let component: QualityOverallFeedbackComponent;
  let fixture: ComponentFixture<QualityOverallFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityOverallFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityOverallFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
