import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserserviceService } from '../../services/userservice.service';
@Component({
  selector: 'app-teatchers',
  templateUrl: './teatchers.component.html',
  styleUrls: ['./teatchers.component.css']
})
export class TeatchersComponent implements OnInit {
  data:any;
  constructor( private userservise: UserserviceService ) {
    
  }

  ngOnInit(): void {
    this.userservise.getAll().subscribe(res =>{
      this.data=res[0];
    })
    
  }
  // delete(form: NgForm){
  //       this.userservise.delete(form.value,this.data._id).subscribe(res =>{
  //        console.log(res)
  //      })

  //     }
     
       
      
}
