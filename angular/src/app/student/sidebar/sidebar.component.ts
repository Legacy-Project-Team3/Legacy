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
image:any;
  constructor(private router:Router,private route:ActivatedRoute) { }
logOut(){
  
  localStorage.removeItem("acces_token")
  // localStorage.removeItem("image")
}
  ngOnInit(): void {

    const helper = new JwtHelperService();
    var Token = localStorage.getItem("acces_token")
    if(!Token || !helper.isTokenExpired(Token)){
      this.router.navigate(["../student-Signin"])
    localStorage.removeItem("acces_token")

    }
    var  data=helper.decodeToken(Token)
    this.dataStudent=data
    var image = localStorage.getItem("image")
      this.image=JSON.parse( image)
       
    console.log(this.image.ImageUrl)
  
  }

}
