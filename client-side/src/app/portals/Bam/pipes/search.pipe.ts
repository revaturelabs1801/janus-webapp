import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
    name: 'search'
})
/**
 * @author Shane Sistoza
 * @author Patrick Kennedy
 * @batch 1712-Steve
 *
 * A filter to sort through a list.
 *
 */
@Injectable()
export class SearchPipe implements PipeTransform {

    /**
     * The method that will return a filtered array based on search term.
     *  1. If the field param is all. It will search through the entire properties of a single object.
     *  2. Allowed CSV param for field param. Note it will display nothing if no matches.
     * @param items items to be filtered (array)
     * @param field the field of the array to be filtered on.
     * @param value the term being searched.
     */
    transform(items: any[], field: string, value: string): any[] {
        if (!items) {
            return [];
        }
        if (!field || !value) {
            return items;
        }
<<<<<<< HEAD
        if (field === 'all') {
            return items.filter(item => {
                for (const i in item) {
                    if (item[i] !== undefined) {
=======
        if (field == 'all') {
            return items.filter(item => {
                for (let i in item) {
                    if (item[i] != undefined) {
>>>>>>> 1808-bam-dev
                        if (item[i].toString().toLowerCase().includes(value.toLowerCase())) {
                            return true;
                        }
                    }
                }
            });
        }
<<<<<<< HEAD
        if (field.split(',').length > 1) {
            const fields = field.split(',');
=======
        if (field.split(",").length > 1) {
            const fields = field.split(",");
>>>>>>> 1808-bam-dev
            return items.filter(item => {
                for (const f in fields) {
                    if (item[fields[f].trim()].toLowerCase().includes(value.toLowerCase())) {
                        return true;
                    }
                }
            });
        }
        return items.filter(item => item[field].toLowerCase().includes(value.toLowerCase()));
    }
}
