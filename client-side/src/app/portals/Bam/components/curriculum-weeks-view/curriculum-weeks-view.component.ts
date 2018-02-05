import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum-weeks-view',
  templateUrl: './curriculum-weeks-view.component.html',
  styleUrls: ['./curriculum-weeks-view.component.css']
})
export class CurriculumWeeksViewComponent implements OnInit {

  constructor() { }

weeks = ['a', 'b', 'c'];

  ngOnInit() {
  }

}
