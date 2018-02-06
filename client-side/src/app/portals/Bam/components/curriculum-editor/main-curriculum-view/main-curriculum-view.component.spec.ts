import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCurriculumViewComponent } from './main-curriculum-view.component';

describe('MainCurriculumViewComponent', () => {
  let component: MainCurriculumViewComponent;
  let fixture: ComponentFixture<MainCurriculumViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCurriculumViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCurriculumViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
