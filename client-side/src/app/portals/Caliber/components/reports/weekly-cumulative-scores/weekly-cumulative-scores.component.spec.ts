import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyCumulativeScoreComponent } from './weekly-cumulative-scores.component';

describe('ToolbarComponent', () => {
  let component: WeeklyCumulativeScoreComponent;
  let fixture: ComponentFixture<WeeklyCumulativeScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyCumulativeScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyCumulativeScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
