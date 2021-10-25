import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {UserserviceService} from "../../services/userservice.service"
@Component({
  selector: 'app-sign-in-adm',
  templateUrl: './sign-in-adm.component.html',
  styleUrls: ['./sign-in-adm.component.css']
})
export class SignInAdmComponent implements OnInit {
  Email:String;
  Password:string;
  constructor(private userservice:UserserviceService  , private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    this.userservice.signInA(form.value).subscribe(res=>{
        localStorage.setItem("acces_token",JSON.stringify(res))
        this.router.navigate(["../admin"])
      })
  }
}
