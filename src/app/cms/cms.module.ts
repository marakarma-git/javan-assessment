import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsComponent } from './cms.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from '../cms/dashboard/dashboard.module';
import { SharedModule } from '../shared/shared.module';
import { EmployeeModule } from '../cms/employee/employee.module';
import { UserModule } from './user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path:'',
    component:CmsComponent,
    children:[
      {
        path:'dashboard',
        loadChildren: ()=> import('../cms/dashboard/dashboard.module').then(module=>module.DashboardModule)
      },
      {
        path:'employee',
        loadChildren: ()=> import('../cms/employee/employee.module').then(module=>module.EmployeeModule)
      },
      {
        path:'user',
        loadChildren: ()=> import('../cms/user/user.module').then(module=>module.UserModule)
      }
    ]
  }
]

@NgModule({
  declarations: [
    CmsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DashboardModule,
    SharedModule,
    EmployeeModule,
    UserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule

  ]
})
export class CmsModule { }
