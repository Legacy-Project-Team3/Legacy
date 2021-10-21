import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare let $: any;
import { CalendarOptions } from '@fullcalendar/angular';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-calander',
  templateUrl: './calander.component.html',
  styleUrls: ['./calander.component.css']
})
export class CalanderComponent {
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
constructor(private formBuilder: FormBuilder){}
  title = 'angularadmintemplates';
  calendarOptions: CalendarOptions;
  ngOnInit() {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      dateClick: this.handleDateClick.bind(this),
    events: [
      { title: 'event 1', date: '2021-10-20' },
      { title: 'event 2', date: '2021-10-30' }
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
  $(".modal-title").text("Add Event at : "+arg.dateStr);
  $(".eventstarttitle").text(arg.dateStr);
}
//Hide Modal PopUp and clear the form validations
hideForm(){
  this.addEventForm.patchValue({ title : ""});
  this.addEventForm.get('title').clearValidators();
  this.addEventForm.get('title').updateValueAndValidity();
  }
}