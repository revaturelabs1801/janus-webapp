import { Component, OnInit } from '@angular/core';
import { CurriculumWeekComponent } from '../curriculum-week/curriculum-week.component';
import { CurriculumSubtopic } from '../../../models/curriculumSubtopic.model';

/**
 * Author:Daniel Robinson
 * Creates full view of a curriculum's weeks
 */
@Component({
  selector: 'app-main-curriculum-view',
  templateUrl: './main-curriculum-view.component.html',
  styleUrls: ['./main-curriculum-view.component.css']
})
export class MainCurriculumViewComponent implements OnInit {
  schedule: CurriculumSubtopic[];
  allWeeks: Array<CurriculumSubtopic[]> = new Array<CurriculumSubtopic[]>();

  constructor() { }

  ngOnInit() {
    this.schedule = [{
      "curriculumSubtopicId": 260,
      "curriculumSubtopicNameId": {
          "id": 76,
          "name": "J2EE architecture",
          "topic": {
              "id": 4,
              "name": "Servlets/JSPs"
          },
          "type": {
              "id": 1,
              "name": "Lesson"
          }
      },
      "curriculumSubtopicWeek": 1,
      "curriculumSubtopicDay": 2
  },
  {
      "curriculumSubtopicId": 261,
      "curriculumSubtopicNameId": {
          "id": 190,
          "name": "new topic",
          "topic": {
              "id": 2,
              "name": "SQL/JDBC"
          },
          "type": {
              "id": 1,
              "name": "Lesson"
          }
      },
      "curriculumSubtopicWeek": 1,
      "curriculumSubtopicDay": 3
  },
  {
      "curriculumSubtopicId": 262,
      "curriculumSubtopicNameId": {
          "id": 188,
          "name": "pygame",
          "topic": {
              "id": 2,
              "name": "SQL/JDBC"
          },
          "type": {
              "id": 1,
              "name": "Lesson"
          }
      },
      "curriculumSubtopicWeek": 1,
      "curriculumSubtopicDay": 4
  },
  {
      "curriculumSubtopicId": 263,
      "curriculumSubtopicNameId": {
          "id": 89,
          "name": "ServletConfig and Context",
          "topic": {
              "id": 4,
              "name": "Servlets/JSPs"
          },
          "type": {
              "id": 1,
              "name": "Lesson"
          }
      },
      "curriculumSubtopicWeek": 3,
      "curriculumSubtopicDay": 2
  },
  {
      "curriculumSubtopicId": 258,
      "curriculumSubtopicNameId": {
          "id": 1,
          "name": "Core Java",
          "topic": {
              "id": 1,
              "name": "Java"
          },
          "type": {
              "id": 1,
              "name": "Lesson"
          }
      },
      "curriculumSubtopicWeek": 1,
      "curriculumSubtopicDay": 1
  },
  {
      "curriculumSubtopicId": 259,
      "curriculumSubtopicNameId": {
          "id": 189,
          "name": "blah",
          "topic": {
              "id": 3,
              "name": "HTML/CSS/Bootstrap"
          },
          "type": {
              "id": 1,
              "name": "Lesson"
          }
      },
      "curriculumSubtopicWeek": 1,
      "curriculumSubtopicDay": 2
  }];

  this.getWeeks();
  }
/**
 * Discovers the amount of weeks in a given curriculum
 */
  getMaxWeeks() {
    let maxWeek = 0;
    this.schedule.forEach(e => {
      if (e.curriculumSubtopicWeek > maxWeek) {
      maxWeek = e.curriculumSubtopicWeek;
      }
    });

    return maxWeek;
  }

  /**
   * Populates week with subtopics from curriculum
   */
  getWeeks() {
    let week: CurriculumSubtopic[] = [];
    const maxWeek = this.getMaxWeeks();
    for (let i = 1; i <= maxWeek; i++) {
      this.schedule.forEach(e => {
        if (e.curriculumSubtopicWeek === i) {
          week.push(e);
        }
      });

      this.allWeeks.push(week);
      week = [];
    }
  }
}

