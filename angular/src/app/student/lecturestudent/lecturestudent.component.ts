import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lecturestudent',
  templateUrl: './lecturestudent.component.html',
  styleUrls: ['./lecturestudent.component.css']
})
export class LecturestudentComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    var Token = localStorage.getItem("acces_token")
    if(!Token){
      this.router.navigate(["../student-Signin"])
    }
  }

}
