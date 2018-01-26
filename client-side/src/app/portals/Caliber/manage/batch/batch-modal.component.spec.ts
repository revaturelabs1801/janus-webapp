import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dependencies } from '../../caliber.test.module';
import { BatchModalComponent } from './batch-modal.component';

describe('BatchModalComponent', () => {
  let component: BatchModalComponent;
  let fixture: ComponentFixture<BatchModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies)
    .compileComponents();
  }), 1440000);

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});