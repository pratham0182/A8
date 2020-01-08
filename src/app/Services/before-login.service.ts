import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TokenService } from './token.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeforeLoginService implements CanActivate {

  constructor(private token:TokenService) { }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean|Observable<boolean>|Promise<boolean>{
    return !this.token.loggedIn();
  }

}
