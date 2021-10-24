import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
declare let $: any;
import { CalendarOptions } from '@fullcalendar/angular';
import { EventService } from 'src/app/services/Event/event.service';
import Swal from 'sweetalert2';
import { JwtHelperService } from "@auth0/angular-jwt";


@Component({
  selector: 'app-calander',
  templateUrl: './calander.component.html',
  styleUrls: ['./calander.component.css']
})
export class CalanderComponent {
  addEventForm: FormGroup;
  submitted = false;
  dataTeacher:any;
  students:any

constructor(private formBuilder: FormBuilder , private route: ActivatedRoute, private router: Router,private eventservice:EventService){

}

  title = 'angularadmintemplates';
  calendarOptions: CalendarOptions;
  ngOnInit() {
    this.eventservice.getAllstudent().subscribe((res)=>{ console.log(res);

      this.students=res})
    const helper = new JwtHelperService();
    var Token = localStorage.getItem("acces_token");
    if(!Token){
      this.router.navigate(["../teacher/signup"])
    }
    this.dataTeacher = helper.decodeToken(Token)
    console.log(this.dataTeacher)
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      dateClick: this.handleDateClick.bind(this)
  };
  //Add User form validations
  this.addEventForm = this.formBuilder.group({
    title: ['', [Validators.required]],
    namestudent:['', [Validators.required]],
    teacher:[this.dataTeacher.teacher_id],
    date:this.calendarOptions.dateClick
    });
}
 //Add user form actions
 get f() { return this.addEventForm.controls; }
 onSubmit() {




  this.submitted = true;

 console.log(this.addEventForm.value);

this.eventservice.postevent(this.addEventForm.value).subscribe((res)=>{console.log(res)})

  if (this.addEventForm.invalid) {



      return Swal.fire('You must make title to your event');
  }
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
  this.addEventForm.patchValue({ namestudent : ""});

  this.addEventForm.get('title').clearValidators();
  this.addEventForm.get('title').updateValueAndValidity();
  this.addEventForm.get('namestudent').clearValidators();
  this.addEventForm.get('namestudent').updateValueAndValidity();
  }
}
