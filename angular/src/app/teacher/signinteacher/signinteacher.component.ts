import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signinteacher',
  templateUrl: './signinteacher.component.html',
  styleUrls: ['./signinteacher.component.css']
})
export class SigninteacherComponent implements OnInit {
Password:String;
Email:String;
  constructor(private userservice:UserserviceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  OnInput(value: String) {
    this.Email = value;
  
    }
    OnInput1(value: String) {
      this.Password = value;
    }
  onSubmit1(){
     this.userservice.signInTeacher({Email:this.Email ,Password:this.Password }).subscribe(res=>{
       console.log(res)
       localStorage.setItem("acces_token" ,JSON.stringify(res))
     this.router.navigate(["../teacher"])
     })  

}
}
