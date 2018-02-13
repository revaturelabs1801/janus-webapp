import { TestBed, inject } from '@angular/core/testing';

import { CurriculumService } from './curriculum.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CurriculumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurriculumService],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
  });

  it('should be created', inject([CurriculumService], (service: CurriculumService) => {
    expect(service).toBeTruthy();
  }));
});
