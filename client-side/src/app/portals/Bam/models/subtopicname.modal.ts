import { TopicName } from './topicname.modal';

export class SubtopicName {
    id: number;
    name: string;
    topic: TopicName;
    type: SubtopicName;
    constructor(id: number, name: string, topic: TopicName, type: SubtopicName) {
        this.id = id;
        this.name = name;
        this.topic = topic;
        this.type = type;
    }
}
