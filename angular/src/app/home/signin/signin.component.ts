import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
    email : string;
    password : string;
  constructor() { }

  ngOnInit(): void {
  }
  signin(){
    if(this.email == "admin@gmail.com" && this.password == "Admin"){
      console.log(this.email)
      console.log(this.password)
    }
    else {
      alert("please check your details")
    }
  }

}
