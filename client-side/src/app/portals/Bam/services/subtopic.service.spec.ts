import { TestBed, inject } from '@angular/core/testing';

import { SubtopicService } from './subtopic.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SubtopicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubtopicService],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
  });

  it('should be created', inject([SubtopicService], (service: SubtopicService) => {
    expect(service).toBeTruthy();
  }));
});
