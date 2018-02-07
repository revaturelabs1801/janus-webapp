import { Component, OnInit, Input } from '@angular/core';
import { WeeksDTO } from '../../../models/weeksDTO.model';
import { CurriculumSubtopic } from '../../../models/curriculumSubtopic.model';
import { DragndropService } from '../../../services/dragndrop.service';
import { SubtopicName } from '../../../models/subtopicname.model';

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

  @Input() weekDTO: CurriculumSubtopic[] = [];
  @Input() weekNum: number;
  monday: SubtopicName[] = [];
  tuesday: SubtopicName[] = [];
  wednesday: SubtopicName[] = [];
  thursday: SubtopicName[] = [];
  friday: SubtopicName[] = [];

  constructor(private dndService: DragndropService) { }

  currentlyDragged;

  ngOnInit() {
    this.sortSubtopics();
  }

  /**
   * Sorts through curriculum to assign week-day value from numeric signifier
   */

  sortSubtopics() {
    this.weekDTO.forEach(elem => {
      switch (elem.curriculumSubtopicDay) {
        case 1:
          this.monday.push(elem.curriculumSubtopicNameId);
          break;
        case 2:
          this.tuesday.push(elem.curriculumSubtopicNameId);
          break;
        case 3:
          this.wednesday.push(elem.curriculumSubtopicNameId);
          break;
        case 4:
          this.thursday.push(elem.curriculumSubtopicNameId);
          break;
        case 5:
          this.friday.push(elem.curriculumSubtopicNameId);
          break;
      }
    });
  }

  /**
   * Drop function for drag/drop feature
   */

  dropIt(event, dayNum: number) {

    console.log(event);
    this.dndService.currentItem.subscribe(
      data => {
        this.currentlyDragged = data;
      }
    );
    this.dndService.currentSubtopic.subscribe(
      data => {
        switch (dayNum) {
          case 1:
            this.monday.push(data);
            break;
          case 2:
            this.tuesday.push(data);
            break;
          case 3:
            this.wednesday.push(data);
            break;
          case 4:
            this.thursday.push(data);
            break;
          case 5:
            this.friday.push(data);
            break;
        }
      }
    )
    console.log(this.currentlyDragged.target);
    // event.srcElement.append(this.currentlyDragged.target);
    event.target.append(this.currentlyDragged.target);

  }

  pickItUp(event, subtopic) {
    this.dndService.sendItem(event);
    this.dndService.sendSubtopic(subtopic);

  }

  /**
   * Drag function for drag/drop functionality
   */

  draggedFinder(currentlyDragged) {
    this.currentlyDragged = currentlyDragged;
  }
}
