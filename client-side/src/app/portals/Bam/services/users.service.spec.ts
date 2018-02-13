import { TestBed, inject } from '@angular/core/testing';

import { UsersService } from './users.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('UsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
  });

  it('should be created', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));
});
