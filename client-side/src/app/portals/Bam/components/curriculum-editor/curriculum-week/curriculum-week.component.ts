import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum-week',
  templateUrl: './curriculum-week.component.html',
  styleUrls: ['./curriculum-week.component.css']
})


export class CurriculumWeekComponent implements OnInit {




  constructor() { }

  ngOnInit() {

    let weeks: string[] = ['One', 'Two', 'Three', 'Four'];
  }

}
