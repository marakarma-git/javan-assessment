import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardBaseComponent } from './dashboard-base/dashboard-base.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardChartComponent } from './dashboard-chart/dashboard-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
    children:[
      {path:'dashboard/base',component:DashboardBaseComponent},
      {path:'dashboard/chart',component:DashboardChartComponent}

    ]
  }
]

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardBaseComponent,
    DashboardChartComponent
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
export class DashboardModule { }
