import { TestBed, inject } from '@angular/core/testing';

import { UsersessionService } from './usersession.service';

describe('UsersessionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersessionService]
    });
  });

  it('should be created', inject([UsersessionService], (service: UsersessionService) => {
    expect(service).toBeTruthy();
  }));
});
