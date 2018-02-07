import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssociateToBatchComponent } from './add-associate-to-batch.component';

describe('AddAssociateToBatchComponent', () => {
  let component: AddAssociateToBatchComponent;
  let fixture: ComponentFixture<AddAssociateToBatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAssociateToBatchComponent ]
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

