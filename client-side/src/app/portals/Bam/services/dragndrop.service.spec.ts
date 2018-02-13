import { TestBed, inject } from '@angular/core/testing';

import { DragndropService } from './dragndrop.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DragndropService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DragndropService],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
  });

  it('should be created', inject([DragndropService], (service: DragndropService) => {
    expect(service).toBeTruthy();
  }));
});
