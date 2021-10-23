import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserserviceService} from "../../services/userservice.service"
import { ActivatedRoute, Router } from '@angular/router';
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
  
  constructor(private userservice:UserserviceService,private router:Router,private route:ActivatedRoute) {
  }
  
  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
  
    console.log(form.value)
    this.userservice.registerAndGetRegisterData(form.value).subscribe(res=>{
      // console.log(helper.isTokenExpired(JSON.stringify(res) ))
      
      localStorage.setItem("acces_token",JSON.stringify(res ))
      this.router.navigate(["../student"])
    })
 }
}
