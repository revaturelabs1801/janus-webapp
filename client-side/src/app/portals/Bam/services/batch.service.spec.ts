import { TestBed, inject } from '@angular/core/testing';

import { BatchService } from './batch.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('BatchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BatchService],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
  });

  it('should be created', inject([BatchService], (service: BatchService) => {
    expect(service).toBeTruthy();
  }));
});
