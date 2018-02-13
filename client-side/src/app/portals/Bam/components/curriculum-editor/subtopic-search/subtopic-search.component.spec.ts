import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtopicSearchComponent } from './subtopic-search.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SubtopicSearchComponent', () => {
  let component: SubtopicSearchComponent;
  let fixture: ComponentFixture<SubtopicSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtopicSearchComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtopicSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
