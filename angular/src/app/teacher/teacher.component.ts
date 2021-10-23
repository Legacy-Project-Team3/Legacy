import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
dataTeacher:any;
  constructor(private router:Router,private route:ActivatedRoute) { }
  logOut(){
  
    localStorage.removeItem("acces_token")
  }
  ngOnInit(): void {

    const helper = new JwtHelperService();
    var Token = localStorage.getItem("acces_token");
    if(!Token){
      this.router.navigate(["../teacher/signup"])
    }
    this.dataTeacher = helper.decodeToken(Token)
    console.log(this.dataTeacher)
  }

}
