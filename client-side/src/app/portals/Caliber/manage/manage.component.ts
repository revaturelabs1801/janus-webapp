import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { format } from 'url';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// rxjs
import { Subscription } from 'rxjs/Subscription';

// pipes
import { DatePipe } from '@angular/common';
import { DisplayBatchByYear } from '../pipes/display-batch-by-year.pipe';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';

// services
import { BatchService } from '../services/batch.service';
import { TrainerService } from '../services/trainer.service';
import { LocationService } from '../services/location.service';
import { TrainingTypeService } from '../services/training-type.service';
import { SkillService } from '../services/skill.service';
import { TraineeService } from '../services/trainee.service';
import { TraineeStatusService } from '../services/trainee-status.service';

// entities
import { Location } from '../entities/Location';
import { Trainer } from '../entities/Trainer';
import { Batch } from '../entities/Batch';
import { Address } from '../entities/Address';
import { Trainee } from '../entities/Trainee';

// components
import { BatchModalComponent } from './batch/batch-modal.component';
import { error } from 'util';
import { ReferenceAst } from '@angular/compiler';
import { CannotDeleteModalComponent } from './cannot-delete-modal/cannot-delete-modal.component';
import { DeleteTraineeModalComponent } from './delete-trainee-modal/delete-trainee-modal.component';
import { CannotDeleteTraineeModalComponent } from './cannot-delete-trainee-modal/cannot-delete-trainee-modal.component';
import { DeleteBatchModalComponent } from './delete-batch-modal/delete-batch-modal.component';

// import { exists } from 'fs';
@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
  providers: [DatePipe],
})
export class ManageComponent implements OnInit, OnDestroy {
  closeResult: string;
  batches: Batch[] = [];
  trainees: Trainee[] = [];
  batchModal: NgbModalRef;
  batchModalNested: NgbModalRef;
  batchByYear: Date[] = [];
  currentYear: number;
  currentBatch: Batch = new Batch;
  createNewBatch: Batch = new Batch;
  batchToUpdate: Batch = new Batch;
  traineeProfileUrl: string;
  test: string;
  trainers: Trainer[] = [];
  trainerNames: string[] = [];
  locations: Address[] = [];
  trainingTypes: string[] = [];
  skills: string[] = [];
  statuses: string[] = [];
  selectStatus = 'Select Status';
  createNewTrainee: Trainee = new Trainee;
  isNew: Boolean;
  currentTrainees: any;
  showDropped: Boolean = false;
  droppedTrainees: Trainee[] = [];

  /* Subscriptions */
  batchListSub: Subscription;
  traineeListSub: Subscription;
  trainerListSub: Subscription;
  locationListSub: Subscription;
  trainingTypeListSub: Subscription;
  traineeStatusListSub: Subscription;
  skillListSub: Subscription;
  savedBatchSub: Subscription;
  deletedBatchSub: Subscription;
  createdTraineeSub: Subscription;
  deletedTraineeSub: Subscription;
  updatedTraineeSub: Subscription;

  traineeToBeDeleted: Trainee;

  constructor(
    private batchService: BatchService,
    private trainerService: TrainerService,
    private locationService: LocationService,
    private trainingTypeService: TrainingTypeService,
    private skillService: SkillService,
    private traineeService: TraineeService,
    private modalService: NgbModal,
    private datePipe: DatePipe,
    private fb: FormBuilder,
    private traineeStatusService: TraineeStatusService,
  ) {
    this.batches = [];
  }

  ngOnInit() {
    /* keep an updated list of batches */
    this.batchListSub = this.batchService.listSubject
    .subscribe((batches) => this.setBatches(batches));

    /* keeps an updated list of trainee Statuses */
    this.traineeStatusListSub = this.traineeStatusService.listSubject
      .subscribe((statuses) => this.setTraineeStatuses(statuses));

    /* reacts to saved batches */
    this.savedBatchSub = this.batchService.savedSubject
      .subscribe((saved) => this.onSavedBatch(saved));

    /* reacts to deleted batches */
    this.deletedBatchSub = this.batchService.deletedSubject
      .subscribe((deleted) => this.onDeletedBatch(deleted));

    /* keep updated list of trainees */
    this.traineeListSub = this.traineeService.listSubject
      .subscribe((trainees) => this.setBatchTrainees(trainees));

    /* reacts to saved trainees */
    this.createdTraineeSub = this.traineeService.savedSubject
      .subscribe((saved) => this.onSavedTrainee(saved));

    /* reacts to updated trainees */
    this.updatedTraineeSub = this.traineeService.updatedSubject
      .subscribe((updated) => this.onSavedTrainee(updated));

    /* reacts to deleted trainees */
    this.deletedTraineeSub = this.traineeService.deletedSubject
      .subscribe((deleted) => this.onDeletedTrainee(deleted));

    this.batchService.fetchAll();
  }

  ngOnDestroy() {
    this.batchListSub.unsubscribe();
    this.savedBatchSub.unsubscribe();
    this.deletedBatchSub.unsubscribe();
    this.traineeListSub.unsubscribe();
    this.traineeListSub.unsubscribe();
    this.createdTraineeSub.unsubscribe();
    this.updatedTraineeSub.unsubscribe();
    this.deletedTraineeSub.unsubscribe();
  }


  /** Creates a new batch from batch service
  * createNewBatch is a batch that is dynamically populated from the modal
  * and function calls from the html in the modal
  *
  * @param batch
  */
  public saveBatch(batch: Batch): void {
    if (batch.batchId === 0) {
      this.batchService.create(batch);
    } else {
      this.batchService.update(batch);
    }
  }

  /**
   * Returns all the batch years for the view to display batches
   * Checks all the batches and the years associated with them
   * Set eliminates duplicate years
   *
   * @param batches
   */
  public getBatchListYears(batches: Batch[]): number[] {
    const yearsSet: Set<number> = new Set();
    const years: number[] = [];

    // console.log(batches);

    for (const batch of batches) {
      const date = batch.startDate;
      const year = Number(this.datePipe.transform(date, 'yyyy'));
      yearsSet.add(year);
    }

    yearsSet.forEach((value) => years.push(value));

    years.sort();
    years.reverse();

    return years;
  }

  /**
   * Opens the batch modal for creating or editing a batch
   * Checks the batch parameter to check if it's for editing or creating a new batch
   *
   * @param batch
   */
  public openBatchModal(batch: Batch): void {
    if (batch === null) {
      batch = new Batch();
      batch.batchId = 0;
    }
    this.batchModal = this.modalService.open(BatchModalComponent, { size: 'lg' });
    this.batchModal.componentInstance.batch = batch;
  }

  /**
   * Duplicate function of the above
   *
   * @param batch
   */
  public openUpdateBatchModal(batch: Batch): void {
    if (batch === null) {
      batch = new Batch();
      batch.batchId = 0;
    }

    this.batchModal = this.modalService.open(BatchModalComponent, { size: 'lg' });
    this.batchModal.componentInstance.batch = batch;
    this.batchModal.result.then((b) => {
      console.log(b);
      console.log('--------------------------------');
      console.log(this.batches);
      for (let i = 0; i < this.batches.length; i++) {
        if (this.batches[i].batchId === b.batchId) {
          this.batches[i] = b;
        }
      }
      console.log('++++++++++++++++++++++++++++++++++++');
      console.log(this.batches);
      location.reload();
    });
  }

  /**
   * Keeps track of current year to display batch by years
   *
   * @param year: number
   */
  private setCurrentYear(year: number): void {
    this.currentYear = year;
  }

  /**
   * Sets all the batches
   *
   * @param batches
   */
  private setBatches(batches: Batch[]): void {
    const years = this.getBatchListYears(batches);

    this.batches = batches;

    /** set the initial year to the latest year of
    * the batches */
    this.setCurrentYear(years[years.length - 1]);
  }


  /**
   * Sets all the trainee objects to each batch
   *
   * @param trainees
   */
  private setBatchTrainees(trainees: Trainee[]): void {
    this.trainees = trainees;
    this.currentBatch.trainees = trainees;
  }

  /**
   * Sets all the trainers
   *
   * @param trainers
   */
  private setTrainers(trainers: Trainer[]): void {
    this.trainers = trainers;
  }

  /**
   * Sets all the locations
   *
   * @param locations
   */
  private setLocations(locations: Location[]): void {
    this.locations = locations;
    console.log(this.locations);
  }

  /**
   * Sets all the training types
   *
   * @param types
   */
  private setTrainingTypes(types: string[]): void {
    this.trainingTypes = types;
  }

  /**
   * Sets all the skill types
   *
   * @param skills
   */
  private setSkills(skills: string[]): void {
    this.skills = skills;
  }

  private setTraineeStatuses(statuses: string[]): void {
    this.statuses = statuses;
  }

  /* Creates a new trainee and assigns the current batch to its batch field
  Training status is assigned since there is no training status service yet in angular */
  createNewTraineeFunction() {
    this.createNewTrainee.batch = this.currentBatch;
    console.log(this.createNewTrainee);
    this.traineeService.create(this.createNewTrainee);
  }

  /** Updates the Trainee
  If you assign the trainee the current batch that it's in
  you will get a circular json error
  This needs to be redesigned in the back end
  To dodge this problem we assign the trainee the batch it's in
  but pass those trainees inside that current batch as null
  so that there is no circular reference
  'Employed' is assigned since there is no training status service yet */
  updateTraineeFunction() {
    const emptyBatch = Object.assign({}, this.currentBatch);
    emptyBatch.trainees = [];
    this.createNewTrainee.batch = emptyBatch;
    this.traineeService.update(this.createNewTrainee);
  }

  /**
   * Deletes the trainee
   *
   * @param trainee
   */
  deleteTraineeFunction(trainee) {
    /** In the original caliber app, deleting trainee removes the trainee
     * but the trainee reappears in the active trainees
     * Even when you remove the trainee, it isn't moved to inactive
     * This is because the trainee object is detached from the database
     *
     * This method shouldn't call traineeService, it needs to call a batchService
     * and apply a deleteTraineeByBatch(batch, trainee) so it can remove the trainee
     * from the current batch, and not delete the trainee overall
     *
     * Later implementation needs to move a trainee from active to inactive
     * and be able to actually delete a trainee from the database entirely
     *
     * Currently we are achieving the delete by assigning the trainee batch to null
     */

    /*------------ Blake's Code -----------
    trainee.batch = null;
    this.traineeService.delete(trainee);
    -------------------------------------*/

    this.traineeToBeDeleted = trainee;
    const modalRef = this.modalService.open(DeleteTraineeModalComponent);
    modalRef.componentInstance.trainee = trainee;
    modalRef.result.then(result => {
      if (result === 'Delete') {
        this.traineeService.delete(trainee);
        this.modalService.open(CannotDeleteTraineeModalComponent);
      }
    }, refused => { });
  }

  /**
   * Deletes all the trainees inside the batch
   *
   * @param batch
   */
  deleteAllTraineesFunction(batch) {

    for (let i = 0; i < this.currentBatch.trainees.length; i++) {
      this.currentBatch.trainees[i].batch = null;
      this.traineeService.delete(this.currentBatch.trainees[i]);
    }
  }

  /**
   * Opens the modal to import batch, the import batch feature is not implemented at this time
   *
   * @param importBatch
   */
  openImportBatchModal(importBatch) {

    this.modalService.open(importBatch).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }

  /**
   * Opens the modal to view batch trainees
   *
   * @param traineesInBatch
   * @param batch
   */
  openViewBatchTraineesModal(traineesInBatch, batch) {
    this.showDropped = false;

    this.batchModal = this.modalService.open(traineesInBatch, { size: 'lg', container: '.batch-trainee-modal-container' });
    this.currentTrainees = traineesInBatch;
    this.currentBatch = batch;
  }

  /**
   * Opens the create trainee modal
   *
   * @param createTrainee
   */
  openCreateTraineeModal(createTrainee) {
    this.isNew = true;
    this.createNewTrainee = new Trainee;
    this.batchModalNested = this.modalService.open(createTrainee, { size: 'lg', container: '.batch-trainee-modal-container2' });
    this.batchModalNested.result.then(a => {}, b => this.closeCreateTraineeModal());
    this.batchModal.close();
  }

  openUpdateTraineeModal(createTrainee, trainee) {
    this.isNew = false;
    this.createNewTrainee = trainee;
    this.batchModalNested = this.modalService.open(createTrainee, { size: 'lg', container: '.batch-trainee-modal-container2' });
    this.batchModalNested.result.then(a => {}, b => this.closeCreateTraineeModal());
    this.batchModal.close();
  }

  closeCreateTraineeModal() {
    this.batchModalNested.close();
    this.batchModal = this.modalService.open(this.currentTrainees, { size: 'lg', container: '.batch-trainee-modal-container' });
  }

  /** Dynamically updates the currentBatch location selected inside the
    * update batch modal whenever a new trainer is selected from the dropdown
    *
    * @param addressId: number
    */
  onUpdateBatchLocationSelect(addressId: number) {
    for (const location of this.locations) {
      if (Number(location.addressId) === Number(addressId)) {
        console.log('found location match ' + this.currentBatch.address.addressId);
        this.currentBatch.address = location;
      }
    }

  }

  /**
   * procedure for when a batch is saved
   * successfully to the API
   *
   * @param batch: Batch
   */
  onSavedBatch(batch: Batch): void {
    this.batchService.fetchAll();
  }

  /**
   * procedure for when a batch is deleted successfully to API
   *
   * @param batch: Batch
   */
  onDeletedBatch(batch: Batch): void {
    this.batchService.fetchAll();
  }

  /**
   * Delete a batch
   *
   * @param batch
   */
  deleteBatchFunction(batch) {
    const modalRef = this.modalService.open(DeleteBatchModalComponent);
    modalRef.componentInstance.batch = batch;
    modalRef.result.then(result => {
      if (result === 'Delete') {
        this.batchService.delete(batch);
        this.modalService.open(CannotDeleteModalComponent);
      }
    }, refused => { });
  }

  /**
   * On saved trainee, closes modals and refreshes subscribers
   * In future design, the modal component must be seperate so that it can refresh without having to close
   *
   * @param trainee
   */
  onSavedTrainee(trainee: Trainee): void {
    this.batchModalNested.close('Saved Successfully');
    this.batchService.fetchAll();
    this.traineeService.fetchAllByBatch(this.currentBatch.batchId);
    this.batchModal.close('Saved Successfully');
  }

  /**
   *On deleted trainee, closes modals and refreshes subscribers
   *In future design, the modal component must be seperate so that it can refresh without having to close
   *
   * @param trainee
   */
  onDeletedTrainee(trainee: Trainee): void {
    this.batchService.fetchAll();
    this.traineeService.fetchAllByBatch(this.currentBatch.batchId);
    this.batchModal.close();
  }

  /**
   *On updated trainee refreshes subscribers
   *
   *
   * @param trainee
   */
  onUpdatedTrainee(trainee: Trainee): void {
    this.batchModalNested.close('Saved Successfully');
    this.batchService.fetchAll();
    this.traineeService.fetchAllByBatch(this.currentBatch.batchId);
  }

  /** Modal functionality */
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
   * Switch trainee mode, set showDropped to !showDropped.
   */
  switchTraineeView() {
    this.showDropped = !this.showDropped;
    if (this.showDropped) {
      this.traineeService.fetchDroppedByBatch(this.currentBatch.batchId).subscribe(results => this.droppedTrainees = results);
    }
  }
}
