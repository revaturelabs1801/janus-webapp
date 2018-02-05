import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDropEmitterComponent } from './test-drop-emitter.component';

describe('TestDropEmitterComponent', () => {
  let component: TestDropEmitterComponent;
  let fixture: ComponentFixture<TestDropEmitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDropEmitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDropEmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
