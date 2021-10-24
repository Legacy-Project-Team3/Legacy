import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {EventService} from "../../services/Event/event.service"
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare let $: any;
import { CalendarOptions } from '@fullcalendar/angular';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {



    addEventForm: FormGroup;
  submitted = false;
  //Add user form actions
  get f() { return this.addEventForm.controls; }
 onSubmit() {

  this.submitted = true;
  // stop here if form is invalid and reset the validations
  this.addEventForm.get('title').setValidators([Validators.required]);
  this.addEventForm.get('title').updateValueAndValidity();


  if (this.addEventForm.invalid) {



      return Swal.fire('You must make title to your event');
  }
}
constructor(private formBuilder: FormBuilder,private router:Router,private route:ActivatedRoute,private userservice:EventService,){}
  title = 'angularadmintemplates';
  calendarOptions: CalendarOptions;
  ngOnInit() {
    var Token = localStorage.getItem("acces_token")
    if(!Token){
      this.router.navigate(["../student-Signin"])
    }
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      dateClick: this.handleDateClick.bind(this),
    events: [
      { title: 'event 1', date: '2021-10-20' },
      { title: ' 2', date: '2021-10-30' }
    ]
  };
  //Add User form validations
  this.addEventForm = this.formBuilder.group({
    title: ['', [Validators.required]]
    });
}
//Show Modal with Forn on dayClick Event
handleDateClick(arg) {
  $("#myModal").modal("show");
  $(".modal-title, .eventstarttitle").text("");
  $(".modal-title").text("Event : "+arg.dateStr);
  $(".eventstarttitle").text(arg.dateStr);

}
//Hide Modal PopUp and clear the form validations
hideForm(){
  this.addEventForm.patchValue({ title : ""});
  this.addEventForm.get('title').clearValidators();
  this.addEventForm.get('title').updateValueAndValidity();
  }
}

