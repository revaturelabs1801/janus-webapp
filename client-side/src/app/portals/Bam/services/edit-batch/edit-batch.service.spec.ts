import { TestBed, inject } from '@angular/core/testing';

import { EditBatchService } from './edit-batch.service';

describe('EditBatchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditBatchService]
    });
  });

  it('should be created', inject([EditBatchService], (service: EditBatchService) => {
    expect(service).toBeTruthy();
  }));
});
