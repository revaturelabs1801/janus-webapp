import { SubtopicName } from './subtopicname.model';
import { Curriculum } from './curriculum.model';

export class CurriculumSubtopic {
    curriculumSubtopicId: number;
    curriculumSubtopicNameId: SubtopicName;
    curriculum: Curriculum;
    curriculumSubtopicWeek: number;
    curriculumSubtopicDay: number;

    constructor(
        curriculumSubtopicId: number,
        curriculumSubtopicNameId: SubtopicName,
        curriculum: Curriculum,
        curriculumSubtopicWeek: number,
        curriculumSubtopicDay: number) {

        this.curriculumSubtopicId = curriculumSubtopicId;
        this.curriculumSubtopicNameId = curriculumSubtopicNameId;
        this.curriculum = curriculum;
        this.curriculumSubtopicWeek = curriculumSubtopicWeek;
        this.curriculumSubtopicDay = curriculumSubtopicDay;
    }

}
