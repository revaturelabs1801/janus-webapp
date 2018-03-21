import { BamUser } from './bamuser.model';

export class Curriculum {
    id: number;
    curriculumName: string;
    curriculumVersion: number;
    curriculumCreator: number;
    curriculumModifier: number;
    curriculumDateCreated: string;
    curriculumNumberOfWeeks: number;
    isMaster: number;

    constructor(
        id: number,
        curriculumName: string,
        curriculumVersion: number,
        curriculumCreator: number,
        curriculumModifier: number,
        curriculumdateCreated: string,
        curriculumNumberOfWeeks: number,
        isMaster: number) {
            this.id = id;
            this.curriculumName = curriculumName;
            this.curriculumVersion = curriculumVersion;
            this.curriculumCreator = curriculumCreator;
            this.curriculumModifier = curriculumModifier;
            this.curriculumDateCreated = curriculumdateCreated;
            this.curriculumNumberOfWeeks = curriculumNumberOfWeeks;
            this.isMaster = 2;
    }
}
