import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumWeeksViewComponent } from './curriculum-weeks-view.component';

describe('CurriculumWeeksViewComponent', () => {
  let component: CurriculumWeeksViewComponent;
  let fixture: ComponentFixture<CurriculumWeeksViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurriculumWeeksViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumWeeksViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
