import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TrainerService } from '../../services/trainer.service';
import { Trainer } from '../../entities/Trainer';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})

export class TrainersComponent implements OnInit, OnDestroy {
  private trainerSubscription: Subscription;
  trainers: Trainer[] = [];
  filteredTrainers: Trainer[] = [];
  titles: Array<any>;
  tiers: Array<any>;
  model = new Trainer();
  activeStatus: String;
  currEditTrainer: Trainer;
  newTrainer: Trainer;
  newTier: string;
  newTitle: string;

  rForm: FormGroup;
  addForm: FormGroup;
  constructor(private trainerService: TrainerService,
    private modalService: NgbModal, private fb: FormBuilder, private route: Router) { }

  ngOnInit() {
    this.trainerService.populateOnStart();
    this.trainerSubscription = this.trainerService.listSubject.subscribe((resp) => {
      this.trainers = resp;
      if (resp) {
        this.filteredTrainers = resp.filter(s => {
          if (this.activeStatus === 'ROLE_INACTIVE') {
            return s.tier === this.activeStatus;
          } else {
            return s.tier !== 'ROLE_INACTIVE';
          }
        });
      }
    });
    this.trainerService.titlesSubject.subscribe(res => this.titles = res);
    this.trainerService.tiersSubject.subscribe(res => {
      this.tiers = (res.filter(tier => tier !== 'ROLE_INACTIVE')); // filter out ROLE_INACTIVE
    });
    this.initFormControl();
  }

  /**
   * initialize form control for validations
   *
   * @memberof TrainersComponent
   */
  initFormControl() {
    this.addForm = this.fb.group({
      'name': ['', Validators.required],
      'email': ['', Validators.email],
      'title': ['', Validators.required],
      'tier': ['', Validators.required],
    });
  }

  /**
   * adds a new trainer to the database
   * @param modal: modal from create trainer form
   */
  addTrainer(modal: Trainer) {
    this.newTrainer = modal;
    console.log(modal);
    console.log(modal.name);
    this.trainerService.create(this.newTrainer).subscribe((resp) => {
      this.trainerService.fetchAll();
    });
    // this.trainers.push(this.newTrainer);
    this.initFormControl();
  }

  open(content) {
    this.modalService.open(content);
  }

  /**
   * backup original fields, and open modal for editing
   * @param content: modal form
   * @param modalTrainer: trainer belong to this modal
   */
  editTrainer(content, modalTrainer: Trainer) {
    this.currEditTrainer = modalTrainer;
    this.newTier = modalTrainer.tier;
    this.newTitle = modalTrainer.title;
    this.rForm = this.fb.group({
      'name': [this.currEditTrainer.name, Validators.required],
      'email': [this.currEditTrainer.email, Validators.email],
      'title': [this.newTitle, Validators.required],
      'tier': [this.newTier, Validators.required],
    });
    this.modalService.open(content, { size: 'lg' });
  }

  /**
   * Tier was changed, update with new value
   * @param newTier: tier string
   */
  tierChange(newTier) {
    this.newTier = newTier;
  }

  /**
   * If title is empty, change back to original title
   * else update with new title
   * @param newTitle: title string
   */
  titleChange(newTitle) {
    if (newTitle === '') {
      this.newTitle = this.currEditTrainer.title;
    } else {
      this.newTitle = newTitle;
    }
  }

  newTierChange(newTier) {
    this.model.tier = newTier;
  }

  newTitleChange(newTitle) {
    this.model.title = newTitle;
  }

  /**
   * Changes param passed for Active/Inactive Buttons
   * @param status: status value
   */
  buttonChange(status: String) {
    this.activeStatus = status;
  }

  /**
   * update the fields in currently edited trainer
   * and send update request
   * @param modal: modal value with all the fields
   */
  updateTrainer(modal) {
    // replacing the trainer's fields with the new ones
    const temp = new Trainer();
    temp.trainerId = this.currEditTrainer.trainerId;
    temp.tier = this.newTier;
    temp.title = this.newTitle;
    temp.name = modal.name;
    temp.email = modal.email;
    // call trainerService to update
    this.trainerService.update(temp).subscribe((resp) => {
      this.currEditTrainer = temp;
      this.trainerService.fetchAll();
    });
  }
  /**
   * get the cause for modal dismissal
   *
   * @private
   * @param {*} reason
   * @returns {string}
   * @memberof TrainersComponent
   */
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  /**
   * clean up subscriptions
   *
   * @memberof TrainersComponent
   */
  ngOnDestroy() {
    this.trainerSubscription.unsubscribe();
  }

  /**
   * set current trainer to clicked  trainer and navigates to trainer profile page
   *
   * @param {any} trainer
   * @memberof TrainersComponent
   */
  goToProfile(trainer) {
    this.trainerService.changeCurrentTrainer(trainer);
    this.route.navigate(['Caliber/settings/trainer-profile']);
  }
}
