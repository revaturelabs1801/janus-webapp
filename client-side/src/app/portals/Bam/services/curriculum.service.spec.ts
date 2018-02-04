import { TestBed, inject } from '@angular/core/testing';

import { CirriculumService } from './cirriculum.service';

describe('CirriculumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CirriculumService]
    });
  });

  it('should be created', inject([CirriculumService], (service: CirriculumService) => {
    expect(service).toBeTruthy();
  }));
});
