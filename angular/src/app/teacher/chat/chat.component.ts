
import { Component, OnInit } from '@angular/core';
import { io} from 'socket.io-client';
const SOCKET_ENDPOINT = 'localhost:3002';

import { Input } from '@angular/core';
import {  Component, OnInit } from '@angular/core';
import { io, Socket } from 'socket.io-client';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit{
  socket;
  message:string;

constructor() { }
ngOnInit() {
  this.setupSocketConnection();
}
setupSocketConnection() {
  this.socket = io(SOCKET_ENDPOINT);
  this.socket.on('message-broadcast', (data: string) => {
  if (data) {
   const element = document.createElement('li');
   element.innerHTML = data;
   element.style.background = 'white';
   element.style.padding =  '15px 30px';
   element.style.margin = '10px';
   document.getElementById('message-list').appendChild(element);
   }
 });
}
SendMessage() {
  this.socket.emit('message', this.message);
  // console.log(this.message);

  const element = document.createElement('li');
  element.innerHTML = this.message;
  element.style.background = 'white';
  element.style.padding =  '15px 30px';
  element.style.margin = '10px';
  element.style.textAlign = 'right';
  document.getElementById('message-list').appendChild(element);
  this.message = '';
}

export class ChatComponent implements OnInit {
  private socket: Socket;
  @Input () message:string;
  private url = 'http://localhost:3000/'; // your server local path

  constructor() {
    this.socket = io(this.url, {transports: ['websocket', 'polling', 'flashsocket']});
  }
  ngOnInit(){
    this.setupSocketConnection()
  }
  setupSocketConnection() {
    this.socket = io(this.url);
    this.socket.on('message-broadcast', (data: string) => {
    if (data) {
     const element = document.createElement('li');
     element.innerHTML = data;
     element.style.background = 'white';
     element.style.padding =  '15px 30px';
     element.style.margin = '10px';
     document.getElementById('message-list').appendChild(element);
     }
   });
 }
  SendMessage() {
   this.socket.emit('message', this.message);
   const element = document.createElement('li');
   element.innerHTML =  this.message;
   element.style.background = 'red';
   element.style.padding =  '15px 30px';
   element.style.margin = '10px';
   element.style.textAlign = 'right';
   document.getElementById('message-list').appendChild(element);
   this.message = '';
}

}
