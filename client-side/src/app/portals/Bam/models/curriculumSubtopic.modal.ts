import { SubtopicName } from './subtopicname.modal';
import { Curriculum } from './curriculum.modal';

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
