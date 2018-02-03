<<<<<<< HEAD:client-side/src/app/portals/Bam/models/curriculumSubtopic.model.ts
import { SubtopicName } from './subtopicname.model';
import { Curriculum } from './curriculum.model';
=======
import { Curriculum } from './curriculum.model';
import { SubtopicName } from './subtopicname.model';
>>>>>>> 99f32ecd1289adaccc60933ff3bdf0bd76a13b98:client-side/src/app/portals/Bam/models/curriculumSubtopic.model.ts

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
