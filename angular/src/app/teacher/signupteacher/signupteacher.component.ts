import { Component, OnInit } from '@angular/core';
import {teacherService} from '../../services/teacher.service'
import {NgForm} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import {UserserviceService} from "../../services/userservice.service"
@Component({
  selector: 'app-signupteacher',
  templateUrl: './signupteacher.component.html',
  styleUrls: ['./signupteacher.component.css']
})
export class SignupteacherComponent implements OnInit {
  Role: string="Teacher";
  TeacherName: string;
   TeacherLastName: string;
    Password: string;
     ImageUrl: string;
    Email: string;
    Field: string;
    Phone: string;
    Experience: string;

  
  constructor(private userservice:UserserviceService,private router:Router,private route:ActivatedRoute) { }
  
  ngOnInit(): void {
  }
  selectChangeHandler (event: any) {
    this.Role = event.target.value;
    if(this.Role==="Teacher"){
      this.router.navigate(["../teacher/signup"])
    }else{
      this.router.navigate(["../signup-student"])
    }
  }
  

onSignup(form:NgForm){
   let  Role:String =  this.Role
   this.userservice.registerAndGetRegisterDataTeacher({...form.value,Role}).subscribe(res=>{
   
     localStorage.setItem("acces_token" ,JSON.stringify(res))
     this.router.navigate(["../teacher"])
   })
  // this.teacherService.CreateTeacher(form.value.Role, form.value.TeacherName,form.value.TeacherLastName,form.value.Password,form.value.ImageUrl,form.value.Email,form.value.Field,form.value.Phone, form.value.Experience)
  
}

}
