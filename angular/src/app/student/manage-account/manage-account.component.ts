import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserserviceService } from '../../services/userservice.service';
@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.css']
})
export class ManageAccountComponent implements OnInit {
  User:String;
  StudentName:String;
  StudentLastName:String;
  Email:String;
  Password:String;
  ImageUrl:File; 
  Age:Number;
  Phone:Number; 
  constructor(private userservice:UserserviceService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    console.log(form.value)
  this.userservice.managaAccount(form.value).subscribe(res=>{
    console.log(res)
  })
}
}