import { Pipe, PipeTransform } from '@angular/core';
import { UsersService } from '../services/users.service';
import { BamUser } from '../models/bamuser.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
@Pipe({
  name: 'userFirstLastName'
})
export class UserFirstLastNamePipe implements PipeTransform {
  private user: BamUser;
  constructor(private usersService: UsersService) {
    let user:BamUser;
  }
  transform(value: number): Observable<String> {
     return this.usersService.getUser(value).map(res => res.fName + ' ' + res.lName);
  }
}
