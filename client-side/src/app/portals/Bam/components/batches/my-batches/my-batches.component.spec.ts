import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { MyBatchesComponent } from './my-batches.component';

describe('MyBatchesComponent', () => {
  let component: MyBatchesComponent;
  let fixture: ComponentFixture<MyBatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBatchesComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call nothing() when button is clicked', async(() => {
    spyOn(component, 'loadPast');

    const loadPastDiv = fixture.debugElement.query(By.css('#loadPast')).nativeElement;
    loadPastDiv.click();

    fixture.whenStable().then(() => {
      expect(component.loadPast).toHaveBeenCalled();
    });
  }));
});
