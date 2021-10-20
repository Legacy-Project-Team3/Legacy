import { Component, OnInit  } from '@angular/core';
import { StatsComponent } from './stats/stats.component';
import { TeatchersComponent } from './teatchers/teatchers.component';
import { SidebarComponent } from '../student/sidebar/sidebar.component';
@Component({
  selector: 'app-admin',
  templateUrl:'./admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

}
