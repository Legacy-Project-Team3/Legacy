import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'
import { UserserviceService } from '../services/userservice.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2020-06-27' },
      { title: 'event 2', date: '2020-06-30' }
    ]
  };
  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }
  constructor(private userservice:UserserviceService) { }

  ngOnInit(): void {
    this.userservice.getRegisterData().subscribe((res)=>console.log(res))
  }

}
