import { UserserviceService } from '../../services/userservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coming-request',
  templateUrl: './coming-request.component.html',
  styleUrls: ['./coming-request.component.css']
})
export class ComingRequestComponent implements OnInit {
   data : any ; 
  constructor(private userservise: UserserviceService) { }

  ngOnInit(): void {
    this.userservise.getAllReq().subscribe(res =>{
      this.data=res;
      console.log(this.data)
    })

  }

}
