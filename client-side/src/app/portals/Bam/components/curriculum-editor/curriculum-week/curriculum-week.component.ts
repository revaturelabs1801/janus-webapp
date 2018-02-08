import { Component, OnInit, Input } from '@angular/core';
import { WeeksDTO } from '../../../models/weeksDTO.model';
import { CurriculumSubtopic } from '../../../models/curriculumSubtopic.model';
import { MainCurriculumViewComponent } from '../main-curriculum-view/main-curriculum-view.component';
import { CourseStructureComponent } from '../course-structure/course-structure.component';
import { Curriculum } from '../../../models/curriculum.model';

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
  monday: CurriculumSubtopic[] = [];
  tuesday: CurriculumSubtopic[] = [];
  wednesday: CurriculumSubtopic[] = [];
  thursday: CurriculumSubtopic[] = [];
  friday: CurriculumSubtopic[] = [];
  allCurriculums: Curriculum[] = [];

  constructor(private mainCurriculumViewComponent: MainCurriculumViewComponent,
    private courseStructureComponent: CourseStructureComponent) { }

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
          this.monday.push(elem);
          break;
        case 2:
          this.tuesday.push(elem);
          break;
        case 3:
          this.wednesday.push(elem);
          break;
        case 4:
          this.thursday.push(elem);
          break;
        case 5:
          this.friday.push(elem);
          break;
      }
    });
  }

  /**
   * Drop function for drag/drop feature. Appends "dropped" item onto target.
   */

  dropIt(event) {
    event.target.append(this.currentlyDragged.target);
  }

  /**
   * Drag function for drag/drop functionality.
   */

  draggedFinder(currentlyDragged) {
    this.currentlyDragged = currentlyDragged;
  }
/**
 *
 * @param weekNum
 * Sends specific weekNum of a CurriculumSuptopic[] to removeWeek, for removal.
 * Also, uses stopPropagation because button is on top of clickable div.
 */
  removeWeekCall(weekNum: number) {
    event.stopPropagation();
    this.mainCurriculumViewComponent.removeWeek(weekNum - 1);
  }
}
