
// import { Component, OnInit } from '@angular/core';
// import { io} from 'socket.io-client';
const SOCKET_ENDPOINT = 'localhost:3002';
import { Input } from '@angular/core';
import {  Component, OnInit } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { JwtHelperService } from "@auth0/angular-jwt";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {
  private socket: Socket;
  dataStudent :any;
  @Input () message:string;
  private url = 'http://localhost:3000/'; // your server local path
  constructor(private router:Router,private route:ActivatedRoute) {
    this.socket = io(this.url, {transports: ['websocket', 'polling', 'flashsocket']});
  }




  ngOnInit(){
    const helper = new JwtHelperService();
    var Token = localStorage.getItem("acces_token")
    if(!Token){
      this.router.navigate(["../student-Signin"])
    }
    var  data=helper.decodeToken(Token)
    this.dataStudent=data

    console.log(this.dataStudent)
    this.setupSocketConnection()
  }
  setupSocketConnection() {
    this.socket = io(this.url);
    this.socket.on('message-broadcast', (data: string) => {
    if (data) {
     const element = document.createElement('li');
     var d =new Date()
     element.innerHTML = data+'<br/>'+this.dataStudent.StudentName+'  '+d.getHours()+':'+d.getMinutes();
     console.log(d.getHours());




     element.style.background = 'white';
     element.style.padding =  '15px 30px';
     element.style.color = 'red';
     element.style.margin = '10px';
     document.getElementById('message-list').appendChild(element);
     }
   });
 }
  SendMessage() {
   this.socket.emit('message', this.message);
   const element = document.createElement('li');
   element.innerHTML =  this.message;

   element.style.background = 'white';
   element.style.padding =  '15px 30px';
   element.style.margin = '10px';
   element.style.textAlign = 'right';
    element.style.color = 'black';
   document.getElementById('message-list').appendChild(element);
   this.message = '';
}
}


















