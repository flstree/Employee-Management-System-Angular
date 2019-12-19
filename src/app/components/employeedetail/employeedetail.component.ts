import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../entity/employee'; 

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent implements OnInit {
  @Input() employee: Employee;

  constructor() { 
    console.log("constructor: ", this.employee);
  }

  ngOnInit() {
    console.log("onInit: ", this.employee);
  }

}
