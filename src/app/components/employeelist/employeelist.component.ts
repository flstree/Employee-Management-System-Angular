import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService} from '../../services/employee-service.service';
import { Employee } from '../../entity/employee';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  employees: Employee[];

  constructor(private emp: EmployeeServiceService) { 
    this.employees = this.emp.getAllEmployees();
  }

  ngOnInit() {
    this.employees = this.emp.getAllEmployees();
  }

}
