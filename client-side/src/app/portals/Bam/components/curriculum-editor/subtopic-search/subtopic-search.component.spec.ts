import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtopicSearchComponent } from './subtopic-search.component';

describe('SubtopicSearchComponent', () => {
  let component: SubtopicSearchComponent;
  let fixture: ComponentFixture<SubtopicSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtopicSearchComponent ]
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
