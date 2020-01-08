import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { BeforeLoginService } from './Services/before-login.service';
import { AfterLoginService } from './Services/after-login.service';



const routes: Routes = [
 {
   path:'dashboard',
   component:DashboardComponent,
   canActivate:[AfterLoginService],
  },
 {
   path:'login',
   component:LoginComponent,
   canActivate:[BeforeLoginService],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
