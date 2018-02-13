import { TestBed, inject } from '@angular/core/testing';

import { TopicService } from './topic.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TopicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopicService],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
  });

  it('should be created', inject([TopicService], (service: TopicService) => {
    expect(service).toBeTruthy();
  }));
});
