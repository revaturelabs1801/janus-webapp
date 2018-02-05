import { Injectable } from '@angular/core';
import { UsersService } from './users.service';
import { BamUser } from '../models/bamuser.model';

@Injectable()
export class UsersessionService {
  bamUser: BamUser;

  constructor(private userService: UsersService) {
    this.bamUser = {
      'userId': 3,
      'fName': 'Ryan',
      'mName': null,
      'lName': 'Lessley',
      'email': 'rl@revature.com',
      'pwd': '1234',
      'role': 2,
      'batch': null,
      'phone': '1234567890',
      'phone2': '8675309',
      'skype': 'rl_skype',
      'pwd2': null,
      'assignForceID': 9
  };
   }

  putUserInSession() {
    this.userService.updateUser(this.bamUser).map(data => {
      localStorage.setItem('bamUser', JSON.stringify(this.bamUser));
      return data;
    });
  }

  getUser(): BamUser {
    return JSON.parse(localStorage.getItem('bamUser'));
  }

}
