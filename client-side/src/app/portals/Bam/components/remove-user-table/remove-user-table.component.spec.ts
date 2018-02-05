import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveUserTableComponent } from './remove-user-table.component';

describe('RemoveUserTableComponent', () => {
  let component: RemoveUserTableComponent;
  let fixture: ComponentFixture<RemoveUserTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveUserTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveUserTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
