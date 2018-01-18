import { TestBed, inject } from '@angular/core/testing';

import { TraineeStatusService } from './trainee-status.service';

describe('TrainingStatusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TraineeStatusService]
    });
  });

  it('should be created', inject([TraineeStatusService], (service: TraineeStatusService) => {
    expect(service).toBeTruthy();
  }));
});
