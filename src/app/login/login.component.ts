import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../Services/api-service.service';
import { TokenService } from '../Services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';


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
    private auth:AuthService
    
    ) { }

  public form ={

    email:null,
    password:null

  }

  onSubmit(){

    this.api.userLoginAPI(this.form).subscribe(
      data=>this.handleResponse(data),
      error=>console.log('error')
    );

    console.log(this.form);

  }

  ngOnInit() {
  }

  handleResponse(data){

    this.token.handle(data.response.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/dashboard');

  }

}
