import { TestBed, inject } from '@angular/core/testing';

import { AddSubtopicService } from './add-subtopic.service';

describe('AddSubtopicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddSubtopicService]
    });
  });

  it('should be created', inject([AddSubtopicService], (service: AddSubtopicService) => {
    expect(service).toBeTruthy();
  }));
});
