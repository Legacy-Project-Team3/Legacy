import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../services/userservice.service';


import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
 data:any;
 namme:String;
 level : Number;
 classArray = [] as any;
 dataTeacher:any;
  constructor(private userservice:UserserviceService,private router:Router,private route:ActivatedRoute ) { 
  }

  ngOnInit(): void {
  this.userservice.getAllC().subscribe(res =>{
    this.data =res
    console.log(this.data)
  })
  }
  // onChange(e){
  //   this[e.target.name] = e.target.value;
  // }
  // onSend(form:NgForm) {
  //   this.userservise.createClass({namme:this.namme,level:this.level}).subscribe(res =>{
  //     window.location.reload()
  //   })
  // }
}
