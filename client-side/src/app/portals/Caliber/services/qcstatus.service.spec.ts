import { TestBed, inject } from '@angular/core/testing';

import { QCStatusService } from './qcstatus.service';

describe('QcstatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QCStatusService]
    });
  });

  it('should be created', inject([QCStatusService], (service: QCStatusService) => {
    expect(service).toBeTruthy();
  }));
});
