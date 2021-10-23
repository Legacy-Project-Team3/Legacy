import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-signinteacher',
  templateUrl: './signinteacher.component.html',
  styleUrls: ['./signinteacher.component.css']
})
export class SigninteacherComponent implements OnInit {
Password:String;
Email:String;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){

}
}
