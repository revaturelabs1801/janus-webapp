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
   * This method is usesd to go through the week and set the subtopics to the correct day
   * of the week
   * @author James Holzer, Dan Robinson
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
  }

  /**This method is triggered when a object is droped into a droppable zone, it will find
   * the currently dragged object and push that object into the a specfic day of a specific week
   * @author Mohamad Alhindi, Carter Taylor, James Holzer, Dylan Britton, Olayinka Patrick
   * @param dayNum
   */
  dropIt(dayNum: number) {
    this.dndService.currentSubtopic.subscribe(
      data => {
        console.log(data);
        this.weekDTO.daysDTO[dayNum].subtopicNames.push(data);
      }
    ).unsubscribe();
  }

  /**
   * This allows for subtopics to be dragged between days on the same week as well as
   * between days of diffrent weeks
   * @author Mohamad Alhindi, Carter Taylor, James Holzer, Dylan Britton, Olayinka Patrick
   * @param subtopic
   * @param dayNum
   */
  pickItUp(subtopic, dayNum: number) {
    this.dndService.sendSubtopic(subtopic);
  }

  /**
   * When an event is done being dragged the original object is deleted to prevent duplicate
   * object in the array
   * @author Mohamad Alhindi, Carter Taylor, James Holzer, Dylan Britton, Olayinka Patrick
   * @param subtopic
   * @param dayNum
   */
  putItDown(subtopic, dayNum: number) {
    this.weekDTO.daysDTO[dayNum].subtopicNames =
      this.weekDTO.daysDTO[dayNum].subtopicNames.filter(elem => elem !== subtopic);
  }
}
