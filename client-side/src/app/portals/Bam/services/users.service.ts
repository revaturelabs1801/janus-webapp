import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BamUser } from '../models/bamuser.model';
import { environment } from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
  observe: 'response' as 'response'
};
@Injectable()
export class UsersService {
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<BamUser[]> {
    return this.http.get<BamUser[]>(environment.users.getAllUsersUrl()).map(
      data => {
        return data;
      }
    );
  }


  getAllTrainers(): Observable<BamUser[]> {
    return this.http.get<BamUser[]>(environment.users.getAllTrainersUrl()).map(
      data => {
        return data;
      }
    );
  }

  getAllAssociates(): Observable<BamUser[]> {
    return this.http.get<BamUser[]>(environment.users.getAllAssociatesUrl()).map(
      data => {
        return data;
      }
    );
  }

  getUsersInBatch(batchId: number): Observable<BamUser[]> {
    return this.http.get<BamUser[]>(environment.users.getUsersInBatchUrl(batchId)).map(
      data  => {
        return data;
      }
    );
  }

  dropUserFromBatch(batchId: number) {
    return this.http.post(environment.users.dropUserFromBatchUrl(), batchId, httpOptions).map(
      data => {
        return data;
      }
    );
  }
}
