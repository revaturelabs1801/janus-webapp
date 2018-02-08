import { SubtopicName } from './subtopicname.model';

export class DaysDTO {
    subtopicNames: SubtopicName[] = [];

    constructor(subtopicNames: SubtopicName[]) {

        this.subtopicNames = subtopicNames;
    }
}
