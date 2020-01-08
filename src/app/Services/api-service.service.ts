import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  private baseUrl = "http://localhost:8000/api";

   userLoginAPI(form){
     return this.http.post(`${this.baseUrl}/login`,form);
   }

   getUsers(){
    return this.http.get(`${this.baseUrl}/getusers`);
   }
}
