import { Component, OnInit } from '@angular/core';
import { TopicName } from '../../../models/topicname.model';
import { SubtopicName } from '../../../models/subtopicname.model';
import { CurriculumService } from '../../../services/curriculum.service';

@Component({
  selector: 'app-topic-pool',
  templateUrl: './topic-pool.component.html',
  styleUrls: ['./topic-pool.component.css']
})
export class TopicPoolComponent implements OnInit {
  topics: string[] = [];
  uniqarr: string[];
  subArray: Array<SubtopicName[]> = new Array<SubtopicName[]>();
  subTopicName: SubtopicName[];
  constructor(private curriculumService: CurriculumService) { }

  ngOnInit() {
    this.getTopics();
  }

  getTopics() {
    this.curriculumService.getAllTopicPool().subscribe(
      data => {
        this.subTopicName = data;
        this.initTopics();
        this.uniqueTopics();
        this.getSubTopics();
      },
      err => {
        console.log(err.status);
      }
    );
  }

  initTopics() {
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
      this.subArray.push(this.subTopicName.filter(e => this.uniqarr[i] === e.topic.name));
    }
  }

}
