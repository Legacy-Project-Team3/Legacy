import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
dataStudent :any;
  constructor() { }

  ngOnInit(): void {
    const helper = new JwtHelperService();
    var Token = localStorage.getItem("acces_token")
    var  data=helper.isTokenExpired(Token)
    this.dataStudent= data
    console.log( this.dataStudent)
  
  }

}
