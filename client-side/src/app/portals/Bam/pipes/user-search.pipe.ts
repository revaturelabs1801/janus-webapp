import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(associate: any, searchText: string): any {
    if (!associate) {
        return null;
    }
    if (!searchText) {
        return associate;
    }
searchText = searchText.toLowerCase();
return associate.filter( it => {
      return associate.name.toLowerCase().includes(searchText);
    });
   }
}
