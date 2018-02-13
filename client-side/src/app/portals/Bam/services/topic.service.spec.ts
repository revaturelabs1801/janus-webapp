import { async, TestBed, inject } from '@angular/core/testing';

import { TopicService } from './topic.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Dependencies } from '../bam.test.module';

describe('TopicService', () => {
  
  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies).compileComponents();
  }), 1440000);
  
  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     providers: [TopicService],
  //     schemas: [ NO_ERRORS_SCHEMA ]
  //   });
  // });

  it('should be created', inject([TopicService], (service: TopicService) => {
    expect(service).toBeTruthy();
  }));
});
