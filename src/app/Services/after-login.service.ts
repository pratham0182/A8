import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AfterLoginService implements CanActivate {

  constructor(private token:TokenService) { }


  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean|Observable<boolean>|Promise<boolean>{
    return this.token.loggedIn();
  }

}
