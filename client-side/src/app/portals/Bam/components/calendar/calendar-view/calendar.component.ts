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

  @ViewChild('datePicker') datePicker: Calendar; 
  gotoDateValue: Date;

  constructor() { }

  ngOnInit() {
      
    this.events = [
      {
          "title": "All Day Event",
          "start": "2018-02-01"
      },
      {
          "title": "Long Event",
          "start": "2018-02-07",
          "end": "2018-02-10"
      },
      {
          "title": "Repeating Event",
          "start": "2018-02-09T16:00:00"
      },
      {
          "title": "Repeating Event",
          "start": "2018-02-16T16:00:00"
      },
      {
          "title": "Conference",
          "start": "2018-02-11",
          "end": "2018-02-13"
      }
    ];

    if(window.innerWidth < 1000)
    {
        this.fc.defaultView = "listMonth";
        this.fc.header = {
            left: 'agendaDay,basicWeek,listMonth',
            center: 'title',
            right: 'today prev,next'
        }
    }
    else{
        this.fc.defaultView = "month";
        this.fc.header = {
            left: 'agendaDay,agendaWeek,month listMonth',
            center: 'title',
            right: 'today prev,next'
        }
    }

    this.fc.options = 
    {
      defaultDate: Date.now(),
      nowIndicator: true,
      navLinks: true,
      weekNumbers: true,
      weekends: true,
      droppable: true,
      eventLimit: 3,
      longPressDelay: 100,
      scrollTime: '09:00:00',
      businessHours: {
        // days of week. an array of zero-based day of week integers (0=Sunday)
        dow: [ 1, 2, 3, 4, 5 ], // Monday - Friday
    
        start: '9:00', // a start time (9am)
        end: '17:00', // an end time (5pm)
      }
    }
    console.log(this.fc);

  }



  /*Date Picker Event*/
  jumpToDate(date)
  {
      this.fc.gotoDate(date);
      this.fc.changeView("agendaDay");
  }

}
