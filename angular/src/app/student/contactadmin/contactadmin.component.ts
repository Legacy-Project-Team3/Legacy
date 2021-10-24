import { Component, OnInit } from '@angular/core';
import {UserserviceService} from "../../services/userservice.service"
@Component({
  selector: 'app-contactadmin',
  templateUrl: './contactadmin.component.html',
  styleUrls: ['./contactadmin.component.css']
})
export class ContactadminComponent implements OnInit {
  Name: String;
  Email: String;
  Subject: String;
  Message: String;
  constructor(private userservice:UserserviceService) { }

  ngOnInit(): void {
  }

  onChange(e){
    this[e.target.name] = e.target.value;
  }


onSend(){
  console.log(this.Name , this.Email,this.Subject,this.Message)
  this.userservice.studentRequestAdmin({Name:this.Name ,Email: this.Email,Subject:this.Subject,Message:this.Message}).subscribe(res=>{
    console.log(res)
  
  })

}
}
