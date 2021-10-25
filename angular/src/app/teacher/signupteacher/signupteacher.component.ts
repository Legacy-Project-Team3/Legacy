import { Component, OnInit } from '@angular/core';
import {teacherService} from '../../services/teacher.service'
import {NgForm} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
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
    addEventForm: FormGroup;
    submitted = false;
  
  constructor(private formBuilder: FormBuilder ,private userservice:UserserviceService,private router:Router,private route:ActivatedRoute) { }
  
  ngOnInit() {
      //Add User form validations
  this.addEventForm = this.formBuilder.group({
    TeacherName: ['', [Validators.required]],
    TeacherLastName:['', [Validators.required]],
    Password:['', [Validators.required]],
    ImageUrl:['', [Validators.required]],
    Email:['', [Validators.required]],
    Field:['', [Validators.required]],
    Phone:['', [Validators.required]],
    Experience:['', [Validators.required]],
    });
  }
//Add user form actions
get f() { return this.addEventForm.controls; }

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
  this.submitted = true;



}

}
