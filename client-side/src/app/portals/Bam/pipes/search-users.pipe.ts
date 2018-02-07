import { Pipe, PipeTransform } from '@angular/core';
import { LowerCasePipe } from '@angular/common';
import { BamUser } from '../models/bamuser.model';

@Pipe({
    name: 'filterUsers'
})

export class FileterUsersPipe implements PipeTransform {

    constructor() { }


    transform(items: BamUser[], searchText: string): BamUser[] {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        //searchText = searchText.toLowerCase();
        return items.filter((user: BamUser) => {
            //const trainerName = `${user.trainer.fName} ${batch.trainer.lName}`;
            //const startDate = this.datePipe.transform(batch.startDate, 'MM-dd-yyyy');
            //const endDate = this.datePipe.transform(batch.endDate, 'MM-dd-yyyy');
            //const searchTextForDate = searchText.split('/').join('-');
            return (
                ( user.fName != null   &&
                user.fName.toLowerCase().includes(searchText)) ||
                (   user.lName != null && 
                    user.lName.toLowerCase().includes(searchText)) ||
                (   user.email != null && 
                    user.email.toLowerCase().includes(searchText)) ||
                (   user.phone != null && 
                user.phone.toLowerCase().includes(searchText)) 
            )
        }
        );
    }
}


