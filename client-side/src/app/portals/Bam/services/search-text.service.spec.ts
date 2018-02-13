import { TestBed, inject } from '@angular/core/testing';

import { SearchTextService } from './search-text.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SearchTextService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchTextService],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
  });

  it('should be created', inject([SearchTextService], (service: SearchTextService) => {
    expect(service).toBeTruthy();
  }));
});
