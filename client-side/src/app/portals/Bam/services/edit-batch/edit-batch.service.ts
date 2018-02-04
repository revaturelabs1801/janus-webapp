import { Injectable } from '@angular/core';
import { Batch } from '../../models/batch.model';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EditBatchService {

  //batch : Batch; 

  constructor(private http: HttpClient) {
    //TODO: get current_batch_id from 
    console.log("Service is constructed"); 
  }

  getBatchById(batchId : number) :Observable<Batch> {
    console.log("getBatchById is called"); 
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params:  new HttpParams().set('batchId', batchId.toString())
    }

    return this.http.get<Batch>("http://localhost:9001/api/v1/batches/byid?batchId=4"); 
    // get the batch from the server by the id.
    // url: "rest/api/v1/Batches/ById",
    // params:{
    //   batchId: batchId
    // }
  }

  getUsersInBatch(id: number) {
    //TODO return users
    // get users in the batch by the batchId
    // url: "rest/api/v1/Users/InBatch"
    // params: {
    //   batchId: batchId
    // }
  }

  getUsersNotInBatch(id: number) {
    // TODO: return users
    // get users who are not in a batch
    // url: "rest/api/v1/Users/NotInABatch",
    // 
  }

  updateBatch(batch: Batch) {
    // url: "rest/api/v1/Batches/UpdateBatch",
  }

  getAllBatchTypes() : Observable<any> {
    console.log("getBatchById is called"); 
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    }

    return this.http.get<Batch>("http://localhost:9001/api/v1/batches/batchtypes", httpOptions); 
    //Get all batchtypes 
    // url: "rest/api/v1/Batches/BatchTypes",
  }

  addUserToBatch() {
    // This function adds a user to the batch
    // url: "rest/api/v1/Users/Add",
  }

  removeUserFromBatch() {
    // This function removes a user from a batch
    // url: "rest/api/v1/Users/Remove", 
    // params: {
    //   userId: id
    // }
  }

  dropAssociateFromBatch() {
    // This function is used to drop an associate
    // url: "rest/api/v1/Users/Drop",
  }

}
