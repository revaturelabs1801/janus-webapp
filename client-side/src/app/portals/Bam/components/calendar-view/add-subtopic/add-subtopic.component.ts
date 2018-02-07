import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { debounceTime } from 'rxjs/operator/debounceTime';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs/Subject';
import { CalendarService } from '../../../services/calendar.service';
import { SubtopicType } from '../../../models/subtopictype.model';
import { SubtopicName } from '../../../models/subtopicname.model';
import { SubtopicStatus } from '../../../models/subtopicstatus.model';
import { TopicName } from '../../../models/topicname.model';
import { Batch } from '../../../models/batch.model';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Subtopic } from '../../../models/subtopic.model';
import { AddSubtopicService } from '../../../services/add-subtopic.service';

@Component({
  selector: 'app-add-subtopic',
  templateUrl: './add-subtopic.component.html',
  styleUrls: ['./add-subtopic.component.css']
})

export class AddSubtopicComponent implements OnInit {

  @ViewChild('content') modalRef: TemplateRef<any>;
  public loading = true;
  public closeResult: string;

  private subtopics: SubtopicName[] = [];

  public uniqueTopics =  new Set();
  public topicMap = new Map();
  public subtopicArray = [];
  public selectedTopic = 'Select a Topic';
  public selectedSubtopic = 'Select a Subtopic';
  public selectedDate = '';
  public batchName: String;

  public currentlyAddedSubtopic = [];
  public prevDate;
  public newDate;

  private topicId;
  private subtopicId;

  private currentBatch: Batch;
  private batchSubtopics: Subtopic[] = [];

  private topicName: TopicName;
  private subtopicType: SubtopicType;
  private subtopicName: SubtopicName;
  private status: SubtopicStatus;
  private subtopic: Subtopic;
  private slectedDateMiliseconds;

  private _alert = new Subject<string>();
  private _alertSuccess = new Subject<string>();

  public alertMessage: string;
  public successMessage: string;

  constructor(private subtopicsService: AddSubtopicService,
    private modalService: NgbModal) { }

  ngOnInit() {

    this._alert.subscribe((message) => this.alertMessage = message);
    debounceTime.call(this._alert, 5000).subscribe(() => this.alertMessage = null);

    this._alertSuccess.subscribe((message) => this.successMessage = message);
    debounceTime.call(this._alertSuccess, 5000).subscribe(() => this.successMessage = null);

    this.subtopicsService.getSubtopicPool().subscribe(
      (subtopicsService) => {
        this.getCurrentBatch();
        this.getTopics(subtopicsService);
      }
    );
  }
  /**
    * Loads current batch information and all the subtopics of the batch
		*	@author Francisco Palomino | Batch: 1712-dec10-java-steve
		*/
  getCurrentBatch() {
    this.subtopicsService.getBatchById().subscribe(
      (service) =>  {
        this.batchName = service.name;
        this.currentBatch = service;
      }
    );
    this.subtopicsService.getBatchSubtopics().subscribe(
      service => {
        this.batchSubtopics = service;
      });
  }

  /**
    * The endpoint used returns the subtopics with their topic.
    * The following iterations creates a set of unique Topics to filter
    * out the topics from the Subtopics List and maps them to the 'topicMap' property.
    * The loading property is set to false here beacuse once this method is called
    * All the subtopics have benn loaded
    *	@author Francisco Palomino | Batch: 1712-dec10-java-steve
    * @param subtopics holds the subtopics result from the database call
		*/
  getTopics(subtopics) {
    for (let i in subtopics) {
      if (!this.uniqueTopics.has(subtopics[i].topic.name)) {
        this.uniqueTopics.add(subtopics[i].topic.name);
        let array = [];
        array.push(subtopics[i].name);
        this.topicMap.set(subtopics[i].topic.name, array);
        } else {
          let array = this.topicMap.get(subtopics[i].topic.name);
          this.topicMap.delete(subtopics[i].topic.name);
          array.push(subtopics[i].name);
          this.topicMap.set(subtopics[i].topic.name, array);
        }
    }
    this.subtopics = subtopics;
    this.loading = false;
  }
  /**
   * Method called when a topic is changed. It generates the subtopic list
   * of the current Topic selected and sorts them alphabetically
   * @author Francisco Palomino | Batch: 1712-dec10-java-steve
   */
  onChangeLoadSubtopics() {
    this.subtopicArray = [];
    this.selectedSubtopic = 'Select a Subtopic';
    if (this.selectedTopic !== '' && this.selectedTopic !== 'Select a Topic') {
      for (let subtopic of Array.from(this.topicMap.get(this.selectedTopic))) {
        this.subtopicArray.push(subtopic);
      }
    }
    this.subtopicArray.sort((n1, n2) => {
        if (n1 > n2) {
            return 1;
        }
        if (n1 < n2) {
            return -1;
        }
        return 0;
      });
  }
  /**
   * Method is called once the subtopic list is changed which
   * obtains all the necessary properties of the subtopic to be
   * able to persist it to the database
   * @author Francisco Palomino | Batch: 1712-dec10-java-steve
   */
  onChangeGetSubtopicInfo() {
    if (this.selectedSubtopic !== '' && this.selectedSubtopic !== 'Select a Subtopic') {
      for (let i in this.subtopics) {
        if (this.selectedSubtopic === this.subtopics[i].name) {
          this.topicId = this.subtopics[i].topic.id;
          this.subtopicId = this.subtopics[i].id;
          this.subtopicType = {
            id : this.subtopics[i].type.id,
            name : this.subtopics[i].type.name
          };
        }
      }
    }
  }
  /**
   * Method verifies selection inputs and the date and sends the appropriate
   * message to the user if something is missing or incorrect. Once all validation
   * is successfull it persists the new subtopic to the database
   * @author Francisco Palomino | Batch: 1712-dec10-java-steve
   */
  saveSubtopic () {
    this.slectedDateMiliseconds = new Date(this.selectedDate).setHours(0, 0, 0, 0);
    this.slectedDateMiliseconds += 1000 * 60 * 60 * 24;

    if (this.selectedTopic === 'Select a Topic' || this.selectedSubtopic === 'Select a Subtopic'
      || this.selectedTopic === '' || this.selectedSubtopic === '') {
      this.changeAlertMessage(`Select topic and subtopic`);
    } else if (isNaN(this.slectedDateMiliseconds)) {
      this.changeAlertMessage(`Date input error.`);
    } else {
      const today = new Date().setHours(0, 0, 0, 0);
      if (this.slectedDateMiliseconds >= today ) {
        this.status = {
          id : 1,
          name : 'Pending'
        };
      } else {
        this.status = {
          id : 4,
          name : 'Missed'
        };
      }
      this.setSubtopicObject();
      if (this.checkSubtopics()) {
        this.subtopicsService.addSubtopic(this.subtopic).subscribe(
          (service) => {
            let arr = [];
            this.batchSubtopics.push(service);
            this.currentlyAddedSubtopic.push(service);
            this.changeSuccessMessage(`Successfully added!`);
          }, error => {
                        this.changeAlertMessage(`Failed to add Subtopic, check all inputs`);
                      }
          );
      } else {
        this.open(this.modalRef);
      }
    }
  }
  /**
   * Verifies if the subtopic being added to the calendar currently
   * exists on the batch's calendar. If the calendar does have the
   * the subtopic it saves its properties just in case the
   * user wants to override the date.
   * @author Francisco Palomino | Batch: 1712-dec10-java-steve
   * @return I used the false value to idenetify that it can't be
   * added because it exists on the current batch.
   */
  checkSubtopics() {
    for (let i = 0; i < this.batchSubtopics.length; i++ ) {
      if (this.subtopic.subtopicName.name === this.batchSubtopics[i].subtopicName.name) {
        const date = new Date(this.batchSubtopics[i].subtopicDate);
        this.newDate = new Date(this.slectedDateMiliseconds);
        this.newDate = this.newDate.toDateString();
        this.prevDate = date.toDateString();
        this.subtopicId = this.batchSubtopics[i].subtopicId;
        return false;
      }
    }
    return true;
  }

  /**
   * Calls the error alert message
   * @author Francisco Palomino | Batch: 1712-dec10-java-steve
   * @param message holds the message that will be displayed
   */
  public changeAlertMessage(message) {
    this._alert.next(message);
  }

  /**
   * Calls the success alert message
   * @author Francisco Palomino | Batch: 1712-dec10-java-steve
   * @param message holds the message that will be displayed
   */
  public changeSuccessMessage(message) {
    this._alertSuccess.next(message);
  }

  /**
   * Creates the subtopic object based on all the selected
   * values to be persisted to the database
   * @author Francisco Palomino | Batch: 1712-dec10-java-steve
   */
  setSubtopicObject() {
    this.topicName = {
      id : this.topicId,
      name: this.selectedTopic,
    };
    this.subtopicName = {
      id : this.subtopicId,
      name: this.selectedSubtopic,
      topic: this.topicName,
      type: this.subtopicType
    };
    this.subtopic = {
      subtopicId: null,
      subtopicName : this.subtopicName,
      batch : this.currentBatch,
      status : this.status,
      subtopicDate : this.slectedDateMiliseconds
    };
  }
  /**
   * Opens a modal to ask the user if they would like to reset
   * the date of a subtopic currently in their calendar. It allows the user
   * to cancel or save the new change.
   * @author Francisco Palomino | Batch: 1712-dec10-java-steve
   * @param content HTML element reference of the modal
   */
  open(content) {
    this.modalService.open(content).result.then(
      (result) => {
      if (result === 'ok') {
        this.subtopicsService.updateDate(22506, this.subtopicId, this.slectedDateMiliseconds).subscribe(
          () => {this.changeSuccessMessage(`Successfully updated!`); },
          response => {
            if (response.status = 200) {
              this.changeSuccessMessage(`Successfully updated!`);
            } else {
              this.changeAlertMessage(`Failed to add Subtopic, verify all inputs`);
            }
          }
        );
      }
    }, (reason) => {

    });
  }
}
