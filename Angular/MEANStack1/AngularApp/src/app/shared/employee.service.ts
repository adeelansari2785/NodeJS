import { Injectable } from '@angular/core';

//--------------------------------
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import {Employee} from './employee.model';//import schema from model class in shared folder
//--------------------------------


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //--------
  selectedEmployee:Employee;//to be used for insert, update and delete operatons
  employees:Employee[]; //for obtaining a list of employees.
  readonly baseURL='http://localhost:3000/employees';
  //--------
  constructor(private http:HttpClient) { }

  //---------------functions that will contact NodeJS App----------
  postEmployee(emp:Employee){
    return this.http.post(this.baseURL,emp); //http://localhost:3000/employees/
  }

  getEmployeeList(){
    return this.http.get(this.baseURL);
  }

  putEmployee(emp:Employee){
    return this.http.put(this.baseURL+`/${emp._id}`,emp);  
  } 

  deleteEmployee(_id:string){
    return this.http.delete(this.baseURL+`/${_id}`);
  }
  //---------------functions----------

}
