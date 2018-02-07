import { TestBed, inject } from '@angular/core/testing';

import { SearchTextService } from './search-text.service';

describe('SearchTextService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchTextService]
    });
  });

  it('should be created', inject([SearchTextService], (service: SearchTextService) => {
    expect(service).toBeTruthy();
  }));
});
