import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Employee } from '../entity/employee';

@Injectable()
export class EmployeeServiceService {

  baseURL: string = 'https://randomuser.me/api/?results=10';
  employees: Employee[];

  constructor(private http: HttpClient) { 
    this.employees = [
      {
        "id": "dfsjs8Ewds",
        "firstname": "John",
        "lastname": "Doe",
        "age": 26,
        "designation": "Associate Lead, Technology",
        "avatar": "https://thispersondoesnotexist.com/image"
      },
      {
        "id": "ueusndas12",
        "firstname": "Mark",
        "lastname": "Doe",
        "age": 32,
        "designation": "HOD, Technology",
        "avatar": "https://thispersondoesnotexist.com/image"
      },
      {
        "id": "iuieTYSsa3",
        "firstname": "Jenny",
        "lastname": "Doe",
        "age": 27,
        "designation": "Marketing Strategist",
        "avatar": "https://thispersondoesnotexist.com/image"
      }
    ];
  }

  getAllEmployees(): Employee[] {
    return this.employees;
  }

  addEmployee(employee: Employee){
    this.employees.push(employee);
  }

  updateEmployee(employee: Employee){
    const updateEmployee = this.employees.find(emp => emp.id == employee.id);
    updateEmployee.firstname = employee.firstname;
    updateEmployee.lastname = employee.lastname;
    updateEmployee.age = employee.age;
    updateEmployee.designation = employee.designation;
  }

  deleteEmployee(id: string){
    this.employees = this.employees.filter(employee => employee.id != id);
  }

  getEmployee(id:string): Employee{
    return this.employees.find(employee => employee.id === id);
  }

  uniqid(length: number = 10): string {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for(let i = 0; i < length; i++)
     text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

}
