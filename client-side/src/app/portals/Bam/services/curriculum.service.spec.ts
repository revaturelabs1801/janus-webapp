import { async, TestBed, inject } from '@angular/core/testing';

import { CurriculumService } from './curriculum.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Dependencies } from '../bam.test.module';

describe('CurriculumService', () => {
  
  beforeEach(async(() => {
    TestBed.configureTestingModule(Dependencies).compileComponents();
  }), 1440000);
  
  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     providers: [CurriculumService],
  //     schemas: [ NO_ERRORS_SCHEMA ]
  //   });
  // });

  it('should be created', inject([CurriculumService], (service: CurriculumService) => {
    expect(service).toBeTruthy();
  }));
});
