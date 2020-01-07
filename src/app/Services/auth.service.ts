import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private token:TokenService
  ) { }

  private isloggedIn = new BehaviorSubject<boolean>(this.token.loggedIn());

  authStatus = this.isloggedIn.asObservable();

  changeAuthStatus(value:boolean){
     this.isloggedIn.next(value);
  }

}
