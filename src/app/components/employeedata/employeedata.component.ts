import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../../services/employee-service.service';
import { Employee } from '../../entity/employee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employeedata',
  templateUrl: './employeedata.component.html',
  styleUrls: ['./employeedata.component.css']
})
export class EmployeedataComponent implements OnInit {
  employee: Employee;

  constructor(private emp: EmployeeServiceService, private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    this.employee = this.emp.getEmployee('1');
    this.route.params.subscribe(params => this.employee = this.emp.getEmployee(params.id));
  }

}
