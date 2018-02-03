import { TestBed, inject } from '@angular/core/testing';

import { AssignforcesyncService } from './assignforcesync.service';

describe('AssignforcesyncService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssignforcesyncService]
    });
  });

  it('should be created', inject([AssignforcesyncService], (service: AssignforcesyncService) => {
    expect(service).toBeTruthy();
  }));
});
