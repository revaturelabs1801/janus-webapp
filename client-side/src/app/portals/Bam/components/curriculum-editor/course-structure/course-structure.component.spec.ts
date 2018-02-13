import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseStructureComponent } from './course-structure.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CourseStructureComponent', () => {
  let component: CourseStructureComponent;
  let fixture: ComponentFixture<CourseStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseStructureComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
