import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../../entity/employee';
import { EmployeeServiceService } from '../../services/employee-service.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  newEmployee: FormGroup;
  employee: Employee;

  constructor(private empService: EmployeeServiceService,private router: Router) { }

  ngOnInit() {
    this.newEmployee = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      age: new FormControl(),
      designation: new FormControl(),
    });
  }

  save(){
    this.newEmployee.value.id = this.empService.uniqid();
    this.newEmployee.value.avatar = 'https://thispersondoesnotexist.com/image';
    this.employee = new Employee(this.newEmployee.value);
    this.empService.addEmployee(this.employee);
    this.router.navigate(['employees']);
  }

  cancel(){
    this.router.navigate(['employees']);
  }

}
