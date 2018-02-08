import { Component, OnInit, Input } from '@angular/core';
import { WeeksDTO } from '../../../models/weeksDTO.model';
import { CurriculumSubtopic } from '../../../models/curriculumSubtopic.model';
import { DragndropService } from '../../../services/dragndrop.service';
import { SubtopicName } from '../../../models/subtopicname.model';
import { DaysDTO } from '../../../models/daysDTO.model';

/**
 * Authors: Daniel Robinson, Tyler Dresselhouse, Dylan Britton
 * Creates array of days in a week for curriculum view
 */

@Component({
  selector: 'app-curriculum-week',
  templateUrl: './curriculum-week.component.html',
  styleUrls: ['./curriculum-week.component.css']
})

export class CurriculumWeekComponent implements OnInit {

  @Input() weekCurrSubtopics: CurriculumSubtopic[] = [];
  @Input() weekNum: number;
  monday: DaysDTO = new DaysDTO([]);
  tuesday: DaysDTO = new DaysDTO([]);
  wednesday: DaysDTO = new DaysDTO([]);
  thursday: DaysDTO = new DaysDTO([]);
  friday: DaysDTO = new DaysDTO([]);
  weekDTO: WeeksDTO = new WeeksDTO([]);

  constructor(private dndService: DragndropService) { }

  currentlyDragged;

  ngOnInit() {
    this.sortSubtopics();
  }

  /**
   * Sorts through curriculum to assign week-day value from numeric signifier
   */

  sortSubtopics() {
    this.weekCurrSubtopics.forEach(elem => {
      switch (elem.curriculumSubtopicDay) {
        case 1:
          this.monday.subtopicNames.push(elem.curriculumSubtopicNameId);
          break;
        case 2:
          this.tuesday.subtopicNames.push(elem.curriculumSubtopicNameId);
          break;
        case 3:
          this.wednesday.subtopicNames.push(elem.curriculumSubtopicNameId);
          break;
        case 4:
          this.thursday.subtopicNames.push(elem.curriculumSubtopicNameId);
          break;
        case 5:
          this.friday.subtopicNames.push(elem.curriculumSubtopicNameId);
          break;
      }
    });
    this.weekDTO.daysDTO.push(this.monday, this.tuesday, this.wednesday, this.thursday, this.friday);
    // this.weekDTO.daysDTO.push(this.tuesday);
    // this.weekDTO.daysDTO.push(this.wednesday);
    // this.weekDTO.daysDTO.push(this.thursday);
    // this.weekDTO.daysDTO.push(this.friday);
  }

  /**
   * Drop function for drag/drop feature
   */

  dropIt(event, dayNum: number) {
    this.dndService.currentSubtopic.subscribe(
      data => {
        console.log(data);
        this.weekDTO.daysDTO[dayNum].subtopicNames.push(data);
      }
    ).unsubscribe();
  }

  pickItUp(event, subtopic, dayNum: number) {
    this.dndService.sendSubtopic(subtopic);
  }

  putItDown(subtopic, dayNum: number) {
    this.weekDTO.daysDTO[dayNum].subtopicNames =
      this.weekDTO.daysDTO[dayNum].subtopicNames.filter(elem => elem !== subtopic);
  }

  /**
   * Drag function for drag/drop functionality
   */

  draggedFinder(currentlyDragged) {
    this.currentlyDragged = currentlyDragged;
  }
}
