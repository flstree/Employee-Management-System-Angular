import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import AppRoutes from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { EmployeedetailComponent } from './components/employeedetail/employeedetail.component';
import { AddemployeeComponent } from './components/addemployee/addemployee.component';
import { EditemployeeComponent } from './components/editemployee/editemployee.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EmployeedataComponent } from './components/employeedata/employeedata.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { EmployeeServiceService } from './services/employee-service.service';


@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    EmployeedetailComponent,
    AddemployeeComponent,
    EditemployeeComponent,
    NavbarComponent,
    EmployeedataComponent,
    FooterComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(AppRoutes), ReactiveFormsModule
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
