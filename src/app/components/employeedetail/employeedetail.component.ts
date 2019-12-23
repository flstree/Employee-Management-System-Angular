import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../entity/employee'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent implements OnInit {
  @Input() employee: Employee;

  constructor(private router: Router) { 
  }

  ngOnInit() {
  }

  onView(id){
    this.router.navigate(['employee', id]);
  }

}
