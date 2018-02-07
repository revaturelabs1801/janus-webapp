import { Component, OnInit, ViewChild} from '@angular/core';
import { ScheduleModule, Schedule, } from 'primeng/primeng';

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
      this.events = [
        {
            "title": "All Day Event",
            "start": "2016-01-01"
        },
        {
            "title": "Long Event",
            "start": "2016-01-07",
            "end": "2016-01-10"
        },
        {
            "title": "Repeating Event",
            "start": "2016-01-09T16:00:00"
        },
        {
            "title": "Repeating Event",
            "start": "2016-01-16T16:00:00"
        },
        {
            "title": "Conference",
            "start": "2016-01-11",
            "end": "2016-01-13"
        }
    ];

    this.fc.events = this.events;
  }

}
