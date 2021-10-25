import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  dataTeacher:any;
  constructor(private router:Router,private route:ActivatedRoute) { }
  logOut(){

    localStorage.removeItem("acces_token")
  }
  ngOnInit(): void {

    const helper = new JwtHelperService();
    var Token = localStorage.getItem("acces_token");
    this.dataTeacher = helper.decodeToken(Token)
    if(!Token|| helper.isTokenExpired(Token)===true || this.dataTeacher.Role!=="Teacher" ){
      this.router.navigate(["../teacher/signin"])
    }
   
  }

}

