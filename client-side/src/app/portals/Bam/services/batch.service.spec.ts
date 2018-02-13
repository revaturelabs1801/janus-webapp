import { async, TestBed, inject } from '@angular/core/testing';

import { BatchService } from './batch.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Dependencies } from '../bam.test.module';

describe('BatchService', () => {
  
  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies).compileComponents();
  }), 1440000);
  
  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     providers: [BatchService],
  //     schemas: [ NO_ERRORS_SCHEMA ]
  //   });
  // });

  it('should be created', inject([BatchService], (service: BatchService) => {
    expect(service).toBeTruthy();
  }));
});
