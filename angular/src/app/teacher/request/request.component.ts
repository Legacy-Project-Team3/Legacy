import { Component, OnInit } from '@angular/core';
import {UserserviceService} from "../../services/userservice.service"
import { JwtHelperService } from "@auth0/angular-jwt";
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  Name: String;
  Email: String;
  Subject: String;
  Message: String;
  dataTeacher :any;
  constructor(private userservice:UserserviceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const helper = new JwtHelperService();
    var Token = localStorage.getItem("acces_token");
    this.dataTeacher = helper.decodeToken(Token)
    if(!Token|| helper.isTokenExpired(Token)===true || this.dataTeacher.Role!=="Teacher" ){
      this.router.navigate(["../teacher/signin"])
    }
  }
  onChange(e){
    this[e.target.name] = e.target.value;
  }


onSend(){
  console.log(this.Name , this.Email,this.Subject,this.Message)
  this.userservice.studentRequestAdmin({Name:this.Name ,Email: this.Email,Subject:this.Subject,Message:this.Message}).subscribe(res=>{
    console.log(res)
    window.location.reload()
  })

}
}
