import { TestBed, inject } from '@angular/core/testing';

import { CalendarService } from './calendar.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CalendarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalendarService],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
  });

  it('should be created', inject([CalendarService], (service: CalendarService) => {
    expect(service).toBeTruthy();
  }));
});
