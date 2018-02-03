import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/src/client';
import { environment } from '../environments/environment';

@Injectable()
export class AssignforcesyncService {
  constructor(private http: HttpClient) { }

  refreshBatches() {
    this.http.get(environment.assignForce.refreshBatches()).map(
      data => {
        return data;
      }
    );
  }
}
