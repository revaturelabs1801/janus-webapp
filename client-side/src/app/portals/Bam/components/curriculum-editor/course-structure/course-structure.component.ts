import { Component, OnInit } from '@angular/core';
import { Curriculum } from '../../../models/curriculum.model';

@Component({
  selector: 'app-course-structure',
  templateUrl: './course-structure.component.html',
  styleUrls: ['./course-structure.component.css']
})
export class CourseStructureComponent implements OnInit {

  dummyData = [new Curriculum(1, 'Java', 1, null, null, '02/03/2018', 7, 1),
    new Curriculum(2, 'Spring', 1, null, null, '02/03/2018', 7, 1),
    new Curriculum(3, '.net', 1, null, null, '02/03/2018', 7, 1)];

  constructor() { }

  ngOnInit() {
  }

  onClick(event) {
    //logic to show/hide accordian
  }

}
