import { HttpInterceptor, HttpRequest, HttpHandler,HttpEvent} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor{

    constructor(private token:TokenService){}

    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent <any>>{

          const token = this.token.get();
          if(token){
             const cloned = req.clone({
                 headers: req.headers.set('Authorization','Bearer '+token)
             });

             return next.handle(cloned);
          }else{
             return next.handle(req);
          }

    }

}