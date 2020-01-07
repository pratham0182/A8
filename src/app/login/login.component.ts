import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../Services/api-service.service';
import { TokenService } from '../Services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { SnotifyService,SnotifyPosition} from 'ng-snotify';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    
    private api:ApiServiceService,
    private token:TokenService,
    private router:Router,
    private auth:AuthService,
    private Notify:SnotifyService,
    
    ) { }

  public form ={

    email:null,
    password:null

  }

  onSubmit(){

    this.api.userLoginAPI(this.form).subscribe(
      data=>this.handleResponse(data),
      error=>this.handleError(error)
    );

    console.log(this.form);

  }

  ngOnInit() {
  }

  handleResponse(data){

    this.token.handle(data.response.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/dashboard');
    //this.Notify.success('Example body content');

    this.Notify.create({
      title: 'Login Sucessfull',
      body: null,
      config: {
        position: SnotifyPosition.rightTop,
        type: 'success',
      }
    });

  }

  handleError(error){
    this.Notify.create({
      title: 'Error',
      body: error.error.error,
      config: {
        position: SnotifyPosition.rightTop,
        type: 'error',
      }
    }); 
  }

}
