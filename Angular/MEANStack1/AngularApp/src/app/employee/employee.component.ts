import { Component, OnInit } from '@angular/core';
//--------------------------------------
import {NgForm} from '@angular/forms';
import {EmployeeService} from '../shared/employee.service';
import {Employee} from '../shared/employee.model';

declare var M:any;
//--------------------------------------
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService:EmployeeService) { }

  ngOnInit() {//on initialization, call these functions
    this.resetForm();
    this.refreshEmployeeList();
  }

  resetForm(form?: NgForm){
    if(form)
      form.reset();
    this.employeeService.selectedEmployee={
      _id:"",
      name:"",
      designation:"",
      department:"",
      office:"",
      salary:null
    }
  }

  refreshEmployeeList(){
    this.employeeService.getEmployeeList().subscribe(
      (res)=>{
      this.employeeService.employees=res as Employee[];
    });
  }

  //method invoked by submit button in form
  onSubmit(form:NgForm){
    if(form.value._id==""){//insert operation here
      this.employeeService.postEmployee(form.value).subscribe((res)=>{
        this.resetForm(form);
        this.refreshEmployeeList();
        M.toast({html:'Saved Successfully', classes:'rounded'});
      });
    }else{ //update operation here
      this.employeeService.putEmployee(form.value).subscribe((res)=>{
        this.resetForm(form);
        this.refreshEmployeeList();
        M.toast({html:'Updated Successfully', classes:'rounded'});
      });
    }
  }

  onEdit(emp:Employee){
    this.employeeService.selectedEmployee=emp;
  }

  onDelete(_id:string, form:NgForm){
    if(confirm('Are you sure to delete this record?')==true){
      this.employeeService.deleteEmployee(_id).subscribe((res)=>{
        this.refreshEmployeeList();
        this.resetForm(form);
        M.toast({html:'Deleted Successfully', classes:'rounded'});
      });
    }
  }
}
