import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portal';
  public isloggedIn:boolean;

   parentVlaue = 'Parent again';
   constructor(

    private auth:AuthService

   ){}

   getName(){
     alert('Hi Prathamesh');
   }

   ngOnInit() {

     this.auth.authStatus.subscribe(value=>this.isloggedIn=value);

   }

}
