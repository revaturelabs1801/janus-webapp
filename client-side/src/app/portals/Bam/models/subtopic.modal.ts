import { SubtopicName } from './subtopicname.modal';
import { SubtopicStatus } from './subtopicstatus.modal';
import { Batch } from './batch.modal';

export class SubTopic {
    subtopicId: number;
    subtopicName: SubtopicName;
    batch: Batch;
    status: SubtopicStatus;
    subtopicDate: Date;
    constructor(subtopicId: number, subtopicName: SubtopicName, batch: Batch, status: SubtopicStatus, subtopicDate: Date) {
        this.subtopicId = subtopicId;
        this.subtopicName = subtopicName;
        this.batch = batch;
        this.status = status;
        this.subtopicDate = subtopicDate;
    }
}
