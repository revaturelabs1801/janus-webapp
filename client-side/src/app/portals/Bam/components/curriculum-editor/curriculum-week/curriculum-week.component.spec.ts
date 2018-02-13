import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumWeekComponent } from './curriculum-week.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CurriculumWeekComponent', () => {
  let component: CurriculumWeekComponent;
  let fixture: ComponentFixture<CurriculumWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurriculumWeekComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
