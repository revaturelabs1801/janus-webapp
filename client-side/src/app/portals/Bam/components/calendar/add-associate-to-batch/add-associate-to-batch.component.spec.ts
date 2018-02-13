import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssociateToBatchComponent } from './add-associate-to-batch.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AddAssociateToBatchComponent', () => {
  let component: AddAssociateToBatchComponent;
  let fixture: ComponentFixture<AddAssociateToBatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAssociateToBatchComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssociateToBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

