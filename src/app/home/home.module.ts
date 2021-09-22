import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { MainDashboardComponent } from '../shared/main-dashboard/main-dashboard.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HeaderComponent } from '../shared/header/header.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutMeComponent,
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports:[
    HomeComponent,
    MainDashboardComponent,
    HeaderComponent,
    FeedbackComponent
  ]
})
export class HomeModule { }
