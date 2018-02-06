import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'orderBy'
})

export class SortPipe implements PipeTransform {
    transform(value: any[], args: string): any {

    }
}
