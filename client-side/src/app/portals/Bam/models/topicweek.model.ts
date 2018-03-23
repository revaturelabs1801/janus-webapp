import { TopicName } from './topicname.model';
import { Batch } from './batch.model';

export class TopicWeek {
    id: number;
    topic: TopicName;
    batchID: number;
    weekNumber: number;

    constructor(id: number, topic: TopicName, batchID: number, weekNumber: number) {
        this.id = id;
        this.topic = topic;
        this.batchID = batchID;
        this.weekNumber = weekNumber;
    }
}
