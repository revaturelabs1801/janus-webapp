import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BamUser } from '../../portals/Bam/models/bamuser.model';

@Component({
  selector: 'app-bam-nav',
  templateUrl: './bam-nav.component.html',
  styleUrls: ['./bam-nav.component.css']
})
export class BamNavComponent implements OnInit {

  @Input() collapsed: boolean;
  @Output() collapse: EventEmitter<any> = new EventEmitter<any>();

  bamUser: BamUser;

  constructor(/* Some User Service*/) {
    // Set the current User
  }

  ngOnInit() {
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
    this.collapse.emit(this.collapsed);
  }
}
