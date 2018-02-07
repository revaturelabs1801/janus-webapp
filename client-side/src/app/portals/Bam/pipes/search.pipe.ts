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
        return items.filter(singleItem => singleItem[field].toLowerCase().includes(value.toLowerCase()));
    }
}
