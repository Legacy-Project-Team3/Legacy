import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { teacherService } from 'src/app/services/teacher.service';
import { UserserviceService } from '../../services/userservice.service';
@Component({
  selector: 'app-teatchers',
  templateUrl: './teatchers.component.html',
  styleUrls: ['./teatchers.component.css']
})
export class TeatchersComponent implements OnInit {
  data:any;
  array:any
  constructor( private userservise: UserserviceService,private teacherservice:teacherService ) {

  }

  ngOnInit(): void {
    this.userservise.getAll().subscribe(res =>{
      console.log(res)

      this.data=res[0];
     
    })

  }

  delete(data){
    this.teacherservice.deleteTeacher(data)
  }
  // delete(techerid){
  //       this.userservise.delete(form.value,this.data._id).subscribe(res =>{
  //        console.log(res)
  //      })

  //     }



}
