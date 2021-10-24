import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserserviceService} from "../../services/userservice.service"
// import { JwtHelperService } from "@auth0/angular-jwt";
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponentStudent implements OnInit {
  StudentName:String;
  StudentLastName:String;
  Email:String;
  Password:String;
  ImageUrl:File; 
  Age:Number;
  Phone:Number;
  User:String;
  
  constructor(private userservice:UserserviceService) {
  }
  
  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
  
    this.userservice.registerAndGetRegisterData(form.value).subscribe(res=>{
      // console.log(helper.isTokenExpired(JSON.stringify(res) ))
      
      localStorage.setItem("acces_token",JSON.stringify(res ))
    })
 }
}
