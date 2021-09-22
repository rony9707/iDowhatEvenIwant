import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component'; 
import { AppRoutingModule } from '../app-routing.module';
import { LogoComponent } from './logo/logo.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MainDashboardComponent,
    LogoComponent,
    UserDashboardComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    MainDashboardComponent,
    LogoComponent,
    UserDashboardComponent
  ]
})
export class SharedModule { }
