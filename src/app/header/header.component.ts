import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Input() childVal:boolean;

  @Output() setname = new EventEmitter();

  ngOnInit() {
  }
  childCall(){
    this.setname.emit();
  }
  

}
