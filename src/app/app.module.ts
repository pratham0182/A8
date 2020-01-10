import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {SnotifyModule, SnotifyService, ToastDefaults} from 'ng-snotify';
import { DataTablesModule } from 'angular-datatables';
import { AuthTokenInterceptor } from './Services/authtoken.interceptor';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    SidebarComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,SnotifyModule,DataTablesModule
  ],
  providers: [ { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
  SnotifyService,AuthTokenInterceptor,{provide:HTTP_INTERCEPTORS,useClass:AuthTokenInterceptor,multi:true},{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
