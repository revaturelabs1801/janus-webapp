import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { debounceTime } from 'rxjs/operator/debounceTime';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  AlertMessage: string;
  AlertType: string;
  Timeout = new Subject<string>();
  timeoutTime = 2500;

  constructor() { }

  ngOnInit() {
    this.Timeout.subscribe();
    debounceTime.call(this.Timeout, this.timeoutTime).subscribe(() => this.AlertMessage = null);
  }

  Alert(type, message) {
    this.Timeout.next();
    this.AlertMessage = message;
    this.AlertType = type;
  }

}
