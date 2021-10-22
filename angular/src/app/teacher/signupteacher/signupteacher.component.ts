import { Component, OnInit } from '@angular/core';
import {teacherService} from '../../services/teacher.service'
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-signupteacher',
  templateUrl: './signupteacher.component.html',
  styleUrls: ['./signupteacher.component.css']
})
export class SignupteacherComponent implements OnInit {
  Role: string;
  TeacherName: string;
   TeacherLastName: string;
    Password: string;
     ImageUrl: string;
      Email: string;
       Field: string;
        Phone: string;
         Experience: string;
  constructor(public teacherService: teacherService) { }

  ngOnInit(): void {
  }
onSignup(form:NgForm){
  if(form.invalid){
    return;
  }  
  this.teacherService.CreateTeacher(form.value.Role, form.value.TeacherName,form.value.TeacherLastName,form.value.Password,form.value.ImageUrl,form.value.Email,form.value.Field,form.value.Phone, form.value.Experience)
  console.log(form.value)
}
}
