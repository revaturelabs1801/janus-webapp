import { Component, OnInit, AfterViewInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { CurriculumWeekComponent } from '../curriculum-week/curriculum-week.component';
import { CurriculumSubtopic } from '../../../models/curriculumSubtopic.model';
import { CurriculumService } from '../../../services/curriculum.service';
import { CourseStructureComponent } from '../course-structure/course-structure.component';
import { Curriculum } from '../../../models/curriculum.model';
import { CurriculumSubtopicDTO } from '../../../models/curriculumSubtopicDTO.model';
import { MetaDTO } from '../../../models/metaDTO.model';
import { SessionService } from '../../../services/session.service';
import { WeeksDTO } from '../../../models/weeksDTO.model';

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
    toggleTab = 1;
    selectedCurr: Curriculum;
    isNewCurr = false;
    @ViewChildren(CurriculumWeekComponent) weeks: QueryList<CurriculumWeekComponent>;

    constructor(private curriculumService: CurriculumService,
        private sessionService: SessionService) { }


    ngOnInit() {
        this.displayWeekView();
    }

    toggle(view) {
        this.toggleTab = view;
    }

    receiveMessage($event) {
        this.selectedCurr = $event;
    }

    saveCurr() {
        this.selectedCurr.curriculumNumberOfWeeks = this.weeks.length;
        this.selectedCurr.curriculumCreator = this.sessionService.getUser();
        this.selectedCurr.curriculumdateCreated = this.getCurrentDate();
        const meta = new MetaDTO(this.selectedCurr);

        const weeksDTO: WeeksDTO[] = [];
        this.weeks.forEach(elem => weeksDTO.push(elem.weekDTO));

        const curriculumSubtopicDTO = new CurriculumSubtopicDTO(meta, weeksDTO);
        this.curriculumService.addCurriculum(curriculumSubtopicDTO).subscribe(
            data => console.log(data),
            error => console.log(error)
        );
    }

    /**
     * Subscribes to the BehaviorSubject in Curriculum Service
     * which holds the currently selected curriculum's
     * schedule (CurriculumSubtopic[]). Assigns that data to
     * this.schedule and calls this.getWeeks()
     * @author Carter Taylor (1712-Steve)
     */
    displayWeekView() {
        this.curriculumService.currentData.subscribe(
            data => {
                // clear 2D array each time a curriculum is selected
                this.allWeeks = new Array<CurriculumSubtopic[]>();
                this.schedule = data;
                this.getWeeks();
            },
            error => {
                console.log(error);
            }
        );
    }

    getWeeks() {
        if (this.schedule) {
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
     * Adds and array of CurriculumSubtopics as a week to the week view
     */

    addWeek() {
        this.allWeeks.push(new Array<CurriculumSubtopic>());
    }

    /**
     *
     * @param weekNum
     * Selects week by its weekNum and returns the corresponding week object
     */
    getWeekById(weekNum: number): CurriculumSubtopic[] {
        const week: CurriculumSubtopic[] = this.allWeeks[weekNum];
        return week;
    }

    /**
     *
     * @param weekNum
     * Removes a week object from view by its corresponding weekNum
     */
    removeWeek(weekNum: number) {
        this.allWeeks = this.allWeeks.filter(w => w !== this.getWeekById(weekNum));
    }

    getCurrentDate(): string {
        let today: any = new Date();
        let dd: any = today.getDate();
        let mm: any = today.getMonth() + 1;
        const yyyy: any = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        today = mm + '/' + dd + '/' + yyyy;
        return today;
    }
}
