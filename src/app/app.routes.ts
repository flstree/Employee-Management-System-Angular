import { Routes } from '@angular/router';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { EmployeedataComponent } from './components/employeedata/employeedata.component';
import { AddemployeeComponent } from './components/addemployee/addemployee.component';

const AppRoutes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  {
    path: "employees", component: EmployeelistComponent,
  },
  {
    path: "employee/:id", component: EmployeedataComponent,
  },
  {
    path: "employees/new", component: AddemployeeComponent,
  },
];

export default AppRoutes;