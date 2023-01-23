import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserIndexComponent } from './user-index/user-index.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path:'',
    component:UserComponent,
    children:[
      {path:'user/index', component:UserIndexComponent},
      {path:'user/create', component:UserCreateComponent},
      {path:'user/update', component:UserUpdateComponent},
      {path:'user/detail', component:UserDetailComponent},
    ]

  }
]

@NgModule({
  declarations: [
    UserComponent,
    UserCreateComponent,
    UserIndexComponent,
    UserUpdateComponent,
    UserDetailComponent
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
export class UserModule { }
