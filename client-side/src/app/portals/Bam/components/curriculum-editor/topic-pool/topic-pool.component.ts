import { Component, OnInit } from '@angular/core';
import { TopicName } from '../../../models/topicname.model';
import { SubtopicName } from '../../../models/subtopicname.model';

@Component({
  selector: 'app-topic-pool',
  templateUrl: './topic-pool.component.html',
  styleUrls: ['./topic-pool.component.css']
})
export class TopicPoolComponent implements OnInit {
  topics: string[] = [];
  uniqarr: string[];
  subArray: Array<SubtopicName[]> = new Array<SubtopicName[]>();
  subtopicMap: Map<number, SubtopicName[]> = new Map;
  subTopicName: SubtopicName[];
  constructor() { }

  ngOnInit() {
    this.subTopicName = [{
      id: 194,
      name: "Subtopic",
      topic: {
        id: 1,
        name: "Java"
      },
      type: {
        id: 1,
        name: "Lesson"
      }
    },
    {
      id: 193,
      name: "Basket",
      topic: {
        id: 1,
        name: "Java"
      },
      type: {
        id: 1,
        name: "Lesson"
      }
    },
    {
      "id": 190,
      "name": "new topic",
      "topic": {
        "id": 2,
        "name": "SQL/JDBC"
      },
      "type": {
        "id": 1,
        "name": "Lesson"
      }
    },
    {
      "id": 191,
      "name": "Vectors",
      "topic": {
        "id": 4,
        "name": "Servlets/JSPs"
      },
      "type": {
        "id": 1,
        "name": "Lesson"
      }
    }];



    this.makeTopics();
    this.uniqueTopics();
    // console.log(this.uniqarr);
    this.getSubTopics();
    this.subtopicMap.forEach((value: SubtopicName[], key: number) => {
      this.subArray.push(value);

    });
  }

  makeTopics() {
    for (let i = 0; i < this.subTopicName.length; i++) {
      this.topics.push(this.subTopicName[i].topic.name);
    }
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  uniqueTopics() {
    this.uniqarr = this.topics.filter(this.onlyUnique);
  }

  getSubTopics() {
    for (let i = 0; i < this.uniqarr.length; i++) {
      this.subtopicMap.set(i, this.subTopicName.filter(e => this.uniqarr[i] === e.topic.name));
    }
  }

}
