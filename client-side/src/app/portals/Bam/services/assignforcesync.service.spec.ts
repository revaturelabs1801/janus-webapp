import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';


import { AssignforcesyncService } from './assignforcesync.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

xdescribe('AssignforcesyncService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssignforcesyncService],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
  });

  it('should be created', inject([AssignforcesyncService], (service: AssignforcesyncService) => {
    expect(service).toBeTruthy();
  }));
});
