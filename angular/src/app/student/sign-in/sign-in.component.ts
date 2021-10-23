import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {UserserviceService} from "../../services/userservice.service"
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponentStudent implements OnInit {
  Email:String;
  Password:string;

  constructor(private userservice:UserserviceService  , private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
      console.log(form.value)
      this.userservice.signIn(form.value).subscribe(res=>{
        localStorage.setItem("acces_token",JSON.stringify(res))
        this.router.navigate(["../student"])
      })
  }
}
