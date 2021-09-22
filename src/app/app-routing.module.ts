import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './home/about-me/about-me.component';
import { FeedbackComponent } from './home/feedback/feedback.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './user-auth/login/login.component';
import { RegisterComponent } from './user-auth/register/register.component';
import { UserHomeComponent } from './user/user-home/user-home.component';



const routes: Routes = [
{
  component: HomeComponent,
  path:''
},
{
  component: LoginComponent,
  path:'login'
},
{
  component: RegisterComponent,
  path:'register'
},
{
  component: AboutMeComponent,
  path:'aboutme'
},
{
  component: FeedbackComponent,
  path:'feedback'
},
{
  component: UserHomeComponent,
  path:'user/:username'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
