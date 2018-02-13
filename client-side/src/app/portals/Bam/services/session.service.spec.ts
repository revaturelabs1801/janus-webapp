import { TestBed, inject } from '@angular/core/testing';

import { SessionService } from './session.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('UsersessionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionService],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
  });

  it('should be created', inject([SessionService], (service: SessionService) => {
    expect(service).toBeTruthy();
  }));
});
