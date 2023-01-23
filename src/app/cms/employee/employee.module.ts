import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { EmployeeIndexComponent } from './employee-index/employee-index.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path:'',
    component:EmployeeComponent,
    children:[
      {path:'employee/index', component:EmployeeIndexComponent},
      {path:'employee/create', component:EmployeeCreateComponent},
      {path:'employee/:employeeId/update', component:EmployeeUpdateComponent},
      {path:'employee/:employeeId/detail', component:EmployeeDetailComponent}
    ]

  }
]

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeIndexComponent,
    EmployeeCreateComponent,
    EmployeeDetailComponent,
    EmployeeUpdateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule
  ]
})
export class EmployeeModule { }
