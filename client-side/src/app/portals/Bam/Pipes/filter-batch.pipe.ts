import { Pipe, PipeTransform } from '@angular/core';
import { Batch } from '../models/batch.model';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'filterBatch'
})

export class FilterBatchPipe implements PipeTransform {

    constructor(private datePipe: DatePipe) { }


    transform(items: Batch[], searchText: string): Batch[] {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();
        return items.filter((batch: Batch) => {
            const trainerName = `${batch.trainer.fName} ${batch.trainer.lName}`;
            const startDate = this.datePipe.transform(batch.startDate, 'MM-dd-yyyy');
            const endDate = this.datePipe.transform(batch.endDate, 'MM-dd-yyyy');
            const searchTextForDate = searchText.split('/').join('-');
            return (
                batch.type.name.toLowerCase().includes(searchText) ||
                batch.name.toLowerCase().includes(searchText) ||
                trainerName.toLowerCase().includes(searchText) ||
                startDate.toLowerCase().includes(searchTextForDate) ||
                endDate.toLowerCase().includes(searchTextForDate));
        }
        );
    }
}
