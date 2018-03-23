import { Injectable } from '@angular/core';
import { CalendarEvent } from '../models/calendar-event.model';
import { SubtopicStatus } from '../models/subtopicstatus.model';


const Status = {
<<<<<<< HEAD
  PLANNED: 'Pending',
  COMPLETED: 'Completed',
  CANCELED: 'Canceled',
  MISSED: 'Missed'
};

const Color = {
  PLANNED: '#5e8cb2',
  COMPLETED: 'green',
  CANCELED: '#912e2e',
  MISSED: '#c48013'
};
=======
  PLANNED: "Pending",
  COMPLETED: "Completed",
  CANCELED: "Canceled",
  MISSED: "Missed"
}

const Color = {
  PLANNED: "#5e8cb2",
  COMPLETED: "green",
  CANCELED: "#912e2e",
  MISSED: "#c48013"
}
>>>>>>> 1808-bam-dev

@Injectable()
export class CalendarStatusService {

  constructor() { }

  public getStatusColor(status: string): string {
    switch (status) {
      case (Status.PLANNED):
        return Color.PLANNED;
      case (Status.COMPLETED):
        return Color.COMPLETED;
      case (Status.CANCELED):
        return Color.CANCELED;
      case (Status.MISSED):
        return Color.MISSED;
      default:
        return Color.PLANNED;
    }
  }

  /**
   * This service method determines what the next status in the cycle should be while factoring in when the date of the event is
<<<<<<< HEAD
   * compared to what date it currently is.
=======
   * compared to what date it currently is.
>>>>>>> 1808-bam-dev
   * The current requirement is for dates in the past to not be able to be in the pending state
   * @author Sean Sung | Batch: 1712-dec10-java-steve
   */
  public updateNextStatus(event: CalendarEvent): string {
<<<<<<< HEAD
    const today = new Date().setHours(0, 0, 0, 0);
    const eventDay = event.start.getTime();
    const later = today < eventDay - 1;

    switch (event.status) {
      case (Status.PLANNED):
        event.status = Status.COMPLETED;
        break;
      case (Status.COMPLETED):
        event.status = Status.CANCELED;
        break;
      case (Status.CANCELED):
        event.status = Status.MISSED;
=======
    var today = new Date().setHours(0, 0, 0, 0);
    var eventDay = event.start.getTime();
    var later = today < eventDay - 1;

    switch (event.status) {
      case (Status.PLANNED):
        event.status = Status.COMPLETED;
        break;
      case (Status.COMPLETED):
        event.status = Status.CANCELED;
        break;
      case (Status.CANCELED):
        event.status = Status.MISSED;
>>>>>>> 1808-bam-dev
        break;
      case (Status.MISSED):
        event.status = later ? Status.PLANNED : Status.COMPLETED;
        break;
      default:
        event.status = event.status;
    }

    return event.status;
  }

  /**
  * This method should be called whenever the event is moved on the calendar to change the status if it moves into the past
  * or into the future.
  * The status should change from pending to missed if moved into the past and from missed to pending if moved into the future.
  * @author Sean Sung | Batch: 1712-dec10-java-steve
  */
  public updateMovedStatus(event: CalendarEvent): string {
<<<<<<< HEAD
    const today = new Date().setHours(0, 0, 0, 0);
    const eventDay = event.start.getTime();
    const later = today < eventDay;

    if (event.status === Status.PLANNED || event.status === Status.MISSED) {
=======
    var today = new Date().setHours(0, 0, 0, 0);
    var eventDay = event.start.getTime();
    var later = today < eventDay;

    if(event.status == Status.PLANNED || event.status == Status.MISSED) {
>>>>>>> 1808-bam-dev
      event.status = later ? Status.PLANNED : Status.MISSED;
    }

    return event.status;
  }

  /**
   * Returns default status id and string
   * @author Sean Sung | Batch: 1712-dec10-java-steve
   */
  public getDefaultStatus(): SubtopicStatus {
<<<<<<< HEAD
    return new SubtopicStatus(1, Status.PLANNED);
=======
    return new SubtopicStatus(1, Status.PLANNED)
>>>>>>> 1808-bam-dev
  }
}
