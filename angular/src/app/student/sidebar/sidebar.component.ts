import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
dataStudent :any;
  constructor(private router:Router,private route:ActivatedRoute) { }
logOut(){
  console.log("faefaz")
  localStorage.removeItem("acces_token")
}
  ngOnInit(): void {

    const helper = new JwtHelperService();
    var Token = localStorage.getItem("acces_token")
    if(!Token){
      this.router.navigate(["../student-Signin"])
    }
    var  data=helper.decodeToken(Token)
    this.dataStudent=data
    
    console.log(this.dataStudent)
  
  }

}
