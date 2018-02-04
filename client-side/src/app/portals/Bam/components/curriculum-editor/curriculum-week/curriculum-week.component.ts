import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum-week',
  templateUrl: './curriculum-week.component.html',
  styleUrls: ['./curriculum-week.component.css']
})


export class CurriculumWeekComponent implements OnInit {

  weeks: string[][];
  weekOne: string[];
  weekTwo: string[];
  weekThree: string[];


  constructor() { }

  ngOnInit() {
    this.weekOne = ['W1', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    this.weekTwo = ['W2', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    this.weekThree = ['W3', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    this.weeks = [this.weekOne, this.weekTwo, this.weekThree];

  }

}
