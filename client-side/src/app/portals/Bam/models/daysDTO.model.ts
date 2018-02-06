import { Subtopic } from './subtopic.model';

export class DaysDTO {
    subtopic: Subtopic[];

    constructor(subtopic: Subtopic[]) {

        this.subtopic = subtopic;
    }
}
