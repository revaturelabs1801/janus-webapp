import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewAssociatesComponent } from './view-associates.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ViewAssociatesComponent', () => {
  let component: ViewAssociatesComponent;
  let fixture: ComponentFixture<ViewAssociatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAssociatesComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAssociatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
