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
  Role:String="Student";
  constructor(private userservice:UserserviceService,private router:Router,private route:ActivatedRoute) {
  }
  
  ngOnInit(): void {
  }
  onFileSlected(event){
    this.ImageUrl=<File>event.target.files[0];

    const fd = new FormData();
    fd.append("image",this.ImageUrl,this.ImageUrl.name)
      this.userservice.sendImage(fd).subscribe(res=>{
        console.log(res)
        localStorage.setItem("image",JSON.stringify(res)) })
  }
  onSelect(e:any){
      this.Role = e.target.value
      if(this.Role==="Teacher"){
        this.router.navigate(["../teacher/signup"])
      }
  }
  onSubmit(form: NgForm){

    console.log(form.value)
    this.userservice.registerAndGetRegisterData({...form.value,ImageUrl:this.ImageUrl}).subscribe(res=>{
      // console.log(helper.isTokenExpired(JSON.stringify(res) ))
      
      localStorage.setItem("acces_token",JSON.stringify(res ))
      this.router.navigate(["../student"])
    })
 }
}
