import { Component, OnInit, ViewChildren, QueryList} from '@angular/core';
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
    isNewVer = false;
    uniqCurrVersions;
    @ViewChildren(CurriculumWeekComponent) weeks: QueryList<CurriculumWeekComponent>;

    constructor(private curriculumService: CurriculumService,
        private sessionService: SessionService) { }


    ngOnInit() {
        this.displayWeekView();
    }

    /**
     * Toggles between topic view and course structure
     * @author: Mohamad Alhindi
     * @batch:  1712-Dec11-2017
     */
    toggle(view) {
        this.toggleTab = view;
    }

    /**
     * Receives the curriculum object from the course structure
     * @author: Carter Taylor
     * @batch:  1712-Dec11-2017
     */
    receiveMessage(event) {
        this.selectedCurr = event;
        if (event.id == null) {
            this.isNewVer = true;
        } else {
            this.isNewVer = false;
        }
    }

    /**
     * Opens save curriculum modal
     * @author: Mohamad Alhindi, Carter Taylor
     * @batch:  1712-Dec11-2017
     */
    openSaveCurriculumModal() {
        (<any>$('#saveCurriculumModal')).modal('show');
    }

    /**
     * Opens make master curriculum modal
     * @author: Mohamad Alhindi, Carter Taylor
     * @batch:  1712-Dec11-2017
     */
    openMasterModal() {
        (<any>$('#makeNewVerMasterModal')).modal('show');
    }

    /**
     * Update curriculum
     * Saves the new master curriculum version and persist to database
     * Depending on if it already is true or false
     * @author: Carter Taylor
     * @batch:  1712-Dec11-2017
     * @param makeMaster: boolean
     */
    saveCurr(makeMaster: boolean) {
        this.selectedCurr.curriculumNumberOfWeeks = this.weeks.length;
        this.selectedCurr.curriculumCreator = this.sessionService.getUser();
        this.selectedCurr.curriculumdateCreated = this.getCurrentDate();
        if (makeMaster) {
            this.selectedCurr.isMaster = 1;
        }
        const meta = new MetaDTO(this.selectedCurr);

        const weeksDTO: WeeksDTO[] = [];
        this.weeks.forEach(elem => weeksDTO.push(elem.weekDTO));

        const curriculumSubtopicDTO = new CurriculumSubtopicDTO(meta, weeksDTO);
        this.curriculumService.addCurriculum(curriculumSubtopicDTO).subscribe(
            response => {
                console.log(response);
                this.isNewVer = false;
            },
            error => {
                console.log(error);
                this.isNewVer = false;
            },
            () => this.isNewVer = false
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

    /**
     * Generates weeks depending on how many weeks in CurriculumSubtopic[]
     * @author: Mohamad Alhindi, Carter Taylor, James Holzer
     * @batch:  1712-Dec11-2017
     */
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
     * @author: Mohamad Alhindi, Carter Taylor, James Holzer
     * @batch:  1712-Dec11-2017
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
     * @author: Mohamad Alhindi, Carter Taylor, James Holzer
     * @batch:  1712-Dec11-2017
     */

    addWeek() {
        this.allWeeks.push(new Array<CurriculumSubtopic>());
    }

    /**
     *
     * @param weekNum
     * Selects week by its weekNum and returns the corresponding week object
     * @author: Mohamad Alhindi, Carter Taylor, James Holzer
     * @batch:  1712-Dec11-2017
     */
    getWeekById(weekNum: number): CurriculumSubtopic[] {
        const week: CurriculumSubtopic[] = this.allWeeks[weekNum];
        return week;
    }

    /**
     * @param weekNum
     * Removes a week object from view by its corresponding weekNum
     * @author: Mohamad Alhindi, Carter Taylor, James Holzer
     * @batch:  1712-Dec11-2017
     */
    removeWeek(weekNum: number) {
        this.allWeeks = this.allWeeks.filter(w => w !== this.getWeekById(weekNum));
    }

    /**
     * Used to match date created property for the DB
     * @author: Carter Taylor
     * @batch:  1712-Dec11-2017
     */
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

    /**
     * Clear all weeks while editing
     * @author: Mohamad Alhindi, Carter Taylor
     * @batch:  1712-Dec11-2017
     */
    clearAllWeeks() {
        this.allWeeks = [];
    }

    /**
     * Truncates the subtopics from all weeks
     * @author: Mohamad Alhindi, Carter Taylor, James Holzer
     * @batch:  1712-Dec11-2017
     */
    truncateWeeks() {
         for (let i = 0; i < this.allWeeks.length; i++) {
                this.allWeeks[i] = [];
        }
    }

    /**
     * When the synch button is clicked, calls the synchBatch method in the curriculum service
     * @author: Jordan DeLong
     * @batch:  1712-Dec11-2017
     */
    populateCalendar() {
        this.curriculumService.syncBatch(22506).subscribe();
    }
}
