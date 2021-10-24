import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserserviceService } from '../../services/userservice.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.css']
})
export class ManageAccountComponent implements OnInit {
  User:String;
  StudentName:String;
  StudentLastName:String;
  Email:String;
  Password:String;
  ImageUrl:File; 
  Age:Number;
  Phone:Number; 
  constructor(private userservice:UserserviceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    var Token = localStorage.getItem("acces_token")
    if(!Token){
      this.router.navigate(["../student-Signin"])
    }
  }
  onSubmit(form: NgForm ){
    const  token= localStorage.getItem("acces_token")
    const helper = new JwtHelperService();
    const Id = helper.decodeToken(localStorage.getItem("acces_token"))
    console.log(Id.student_id)
  this.userservice.managaAccount(form.value ,token,Id.student_id).subscribe(res=>{
    console.log(res)
  })
}
}