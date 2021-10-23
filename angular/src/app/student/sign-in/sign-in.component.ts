import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
=======
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {UserserviceService} from "../../services/userservice.service"
>>>>>>> 92cfa6f4dc2dd313766b26e59ee1e161fd29364d
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponentStudent implements OnInit {
<<<<<<< HEAD
  userEmail : String;
  userPassword : String;
  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit() {
  }
  signin(){
    this.authService.validate(this.userEmail, this.userPassword)
    .then((response) => {
      this.authService.setUserInfo({'user' : response['user']});
      this.router.navigate(['home']);

    })
=======
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
>>>>>>> 92cfa6f4dc2dd313766b26e59ee1e161fd29364d
  }
}
