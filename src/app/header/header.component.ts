import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { TokenService } from '../Services/token.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private auth:AuthService,
    private token:TokenService,
    private router:Router
    ) { }

  public isloggedIn:boolean;

  @Input() childVal:boolean;

  @Output() setname = new EventEmitter();

  ngOnInit() {

    this.auth.authStatus.subscribe(vlaue=>this.isloggedIn=vlaue);

  }
  childCall(){
    this.setname.emit();
  }

  logout(event:MouseEvent){
    event.preventDefault();
    this.token.remove();
    this.auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }

}
