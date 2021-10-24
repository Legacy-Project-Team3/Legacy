import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

  onChange(e){
    this[e.target.name] = e.target.value;
  }


onSend(){
  console.log(this.Name , this.Email,this.Subject,this.Message)
  
}
}
