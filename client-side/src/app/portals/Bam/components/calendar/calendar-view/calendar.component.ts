import { Component, OnInit, ViewChild} from '@angular/core';
import { ScheduleModule, Schedule, } from 'primeng/primeng';
import { CalendarModule, Calendar } from 'primeng/primeng';

		/**
        *	This component will serve as the main calendar view. 
        *   This component leverages the PrimeNG schedule UI component to render a drag and drop calendar for viewing and updating a batch's subtopics
		*	@author Jordan DeLong (1712-dec10-java-Steve)
		*	
		*	
		*/

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @ViewChild('fc') fc: Schedule;


  events: any[] = [];

  constructor() { }

  ngOnInit() {
      
    this.events = [];

  }

}
