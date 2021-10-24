import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../services/userservice.service';


@Component({
  selector: 'app-students-tabel',
  templateUrl: './students-tabel.component.html',
  styleUrls: ['./students-tabel.component.css']
})
export class StudentsTabelComponent implements OnInit {
  data:any;
  constructor( private userservise: UserserviceService ) {
    
  }

  ngOnInit(){
     this.userservise.getAllS().subscribe(res=>{
      this.data=res
     })
  }


}
