import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSubtopicModalComponent } from './delete-subtopic-modal.component';

describe('DeleteSubtopicModalComponent', () => {
  let component: DeleteSubtopicModalComponent;
  let fixture: ComponentFixture<DeleteSubtopicModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSubtopicModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSubtopicModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
