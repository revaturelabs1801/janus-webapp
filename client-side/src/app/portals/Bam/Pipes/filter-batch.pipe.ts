import { Pipe, PipeTransform } from '@angular/core';
import { Batch } from '../models/batch.model';
import { BamUser } from '../models/bamuser.model';
import { UsersService } from '../services/users.service';
import { DatePipe } from '@angular/common';

/**
 * Filters a list of Batches by a given search term
 * @author Charlie Harris | 1712-dec10-java-steve
 */
@Pipe({
    name: 'filterBatch'
})
export class FilterBatchPipe implements PipeTransform {

    datePipe: DatePipe = new DatePipe('en-US');

    constructor(private usersService: UsersService) { }

    /**
     * Filters [items] by [searchText]. Checks trainer's full name (first + last),
     * batch name, and batch type, not case sensitive
     * @param items List of Batch items to be filtered
     * @param searchText Text [items] is filtered by
     * @author Charlie Harris | 1712-dec10-java-steve
     */
    transform(items: Batch[], searchText: string, usersService: UsersService): Batch[] {

        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();

        return items.filter((batch: Batch) => {
            const trainer: BamUser;
            this.usersService.getUser(batch['id']).subscribe(newTrainer => trainer = newTrainer);
            const trainerName = `${trainer.fName} ${trainer.lName}`;
            return (
                batch.type.name.toLowerCase().includes(searchText) ||
                batch.name.toLowerCase().includes(searchText) ||
                trainerName.toLowerCase().includes(searchText));
        }
        );
    }
}
