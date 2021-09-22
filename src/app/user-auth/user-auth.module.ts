import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { MainDashboardComponent } from '../shared/main-dashboard/main-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip'; 
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MatTooltipModule,
    AppRoutingModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    MainDashboardComponent
  ]
})
export class UserAuthModule { }
