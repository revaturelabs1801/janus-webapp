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

  /** Author: Mohamad Alhindi
    *  Batch: 1712-Dec11-2017
    * On initializing this component we are calling the getTopic() function */
  ngOnInit() {
    this.getTopics();
  }

  /** Author: Mohamad Alhindi
    *  Batch: 1712-Dec11-2017
    *  This will subscribe to the curriculum service to obtain the topic pool information */
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

    /** Author: Mohamad Alhindi
      *  Batch: 1712-Dec11-2017
      *  Runs throught subTopicNames array and will extract the topics within the array */
  initTopics() {
    for (let i = 0; i < this.subTopicName.length; i++) {
      this.topics.push(this.subTopicName[i].topic.name);
    }
  }

  /** Author: Mohamad Alhindi
    *  Batch: 1712-Dec11-2017
    *  This method is used with conjunction of filter to obtain only unique elements of an array */
  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  /** Author: Mohamad Alhindi
    *  Batch: 1712-Dec11-2017
    *  Filters through topics array to filter out repeated topics within the array */
  uniqueTopics() {
    this.uniqarr = this.topics.filter(this.onlyUnique);
  }

  /** Author: Mohamad Alhindi
    * Batch: 1712-Dec11-2017
    * Uses the unique topics array to obtain the the subtopics that releate to each topic */
  getSubTopics() {
    for (let i = 0; i < this.uniqarr.length; i++) {
      this.subArray.push(this.subTopicName.filter(e => this.uniqarr[i] === e.topic.name));
    }
  }

}
