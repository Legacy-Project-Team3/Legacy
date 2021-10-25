import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserserviceService } from '../../services/userservice.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
 data:any
  constructor(private userservise: UserserviceService ,private http: HttpClient) { 
  }

  ngOnInit(): void {
  //   this.http.post<any>('').subscribe(data => {
  //     this.data = data;
  // })
  }
}
