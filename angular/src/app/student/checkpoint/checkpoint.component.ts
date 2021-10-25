import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';




@Component({
  selector: 'app-checkpoint',
  templateUrl: './checkpoint.component.html',
  styleUrls: ['./checkpoint.component.css']
})
export class CheckpointComponent implements OnInit {
CheckpointData : any ; 
  constructor(private router:Router,private route:ActivatedRoute,private userservice:UserserviceService ) { }

  ngOnInit(): void {
    var Token = localStorage.getItem("acces_token")
    if(!Token){
      this.router.navigate(["../student-Signin"])
    }
    this.userservice.getCheckpoint().subscribe(res=>{
      console.log(res)
      this.CheckpointData=res
     
    })
  }

}
