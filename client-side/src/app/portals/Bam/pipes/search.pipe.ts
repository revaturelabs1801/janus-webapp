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
        if ( field == 'all' ) {
            return items.filter(objects => {
                for (let i in objects) {
                    if (objects[i] != undefined) {
                        if ( objects[i].toString().toLowerCase().includes(value.toLowerCase()) ) {
                            return objects;
                        }
                    }
                }
            });
        }
        return items.filter(singleItem => singleItem[field].toLowerCase().includes(value.toLowerCase()));
    }
}
