import { TestBed, inject } from '@angular/core/testing';

import { CalendarStatusService } from './calendar-status.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('StatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalendarStatusService],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
  });

  it('should be created', inject([CalendarStatusService], (service: CalendarStatusService) => {
    expect(service).toBeTruthy();
  }));
});
