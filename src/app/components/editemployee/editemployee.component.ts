import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeServiceService } from '../../services/employee-service.service';
import { Employee } from '../../entity/employee';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {
  employee: Employee;
  empData: FormGroup;
  id: string;

  constructor(private empService: EmployeeServiceService, private router: Router, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
    this.employee = this.empService.getEmployee(this.id);
   }

  ngOnInit() {
    this.empData = new FormGroup({
      firstname: new FormControl(this.employee.firstname, [Validators.required]),
      lastname: new FormControl(this.employee.lastname, [Validators.required]),
      age: new FormControl(this.employee.age, [Validators.required]),
      designation: new FormControl(this.employee.designation, [Validators.required]),
    });
  }

  save() {
    this.empData.value.id = this.id;
    this.empData.value.avatar = 'https://thispersondoesnotexist.com/image';
    this.employee = new Employee(this.empData.value);
    this.empService.updateEmployee(this.employee);
    this.router.navigate(['employees']);
  }

  cancel() {
    this.router.navigate(['employees']);
  }

}
