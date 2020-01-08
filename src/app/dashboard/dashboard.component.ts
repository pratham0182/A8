import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../Services/api-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private api:ApiServiceService) { }

  ngOnInit() {
 
    const users = this.api.getUsers().subscribe(

      data=>this.handleUsers(data),
      error=>console.log(error)

    );
    
  

  }
  handleUsers(data){
      console.log(data.response);
  }

}
