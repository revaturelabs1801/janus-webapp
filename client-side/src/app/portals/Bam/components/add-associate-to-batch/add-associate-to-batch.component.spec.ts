import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserTableComponent } from './add-user-table.component';

describe('AddUserTableComponent', () => {
  let component: AddUserTableComponent;
  let fixture: ComponentFixture<AddUserTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
