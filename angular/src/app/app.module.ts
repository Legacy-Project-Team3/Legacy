import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorsComponent } from './errors/errors.component';
import { ProfilComponent } from './profil/profil.component';


import { CardComponent } from './card/card.component';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction'; 

import { SigninComponent } from './home/signin/signin.component';
import { SignupComponent } from './home/signup/signup.component';
import { RequestComponent } from './request/request.component';
import { NavbarComponent } from './navbar/navbar.component';

import { StatsComponent } from './admin/stats/stats.component';
import { SidebareComponent } from './admin/sidebare/sidebare.component';
import { TeatchersComponent } from './admin/teatchers/teatchers.component';
/*student*/
import { StudentComponent } from './student/student.component';
import { SignInComponentStudent } from './student/sign-in/sign-in.component';
import { SignUpComponentStudent } from './student/sign-up/sign-up.component';
import {NavbarComponent1} from "./student/navbar/navbar.component";
import { SidebarComponent } from './student/sidebar/sidebar.component';
import { LectureComponent } from './student/lecture/lecture.component';
import { CheckpointComponent } from './student/checkpoint/checkpoint.component';
import { ExerciceComponent } from './student/exercice/exercice.component';
import { MessangerComponent } from './student/messanger/messanger.component';
import { ManageAccountComponent } from './student/manage-account/manage-account.component';
/*student*/
const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'teacher',component:TeacherComponent},
  {path:'profil',component:ProfilComponent},
  {path:'request',component:RequestComponent},
  //student path 
  {path:"student",component:StudentComponent},
  {path:"signup-student",component:SignUpComponentStudent},
  {path:"student-Signin",component:SignInComponentStudent},
  {path:"student-Lecture",component:LectureComponent},
  {path:"student-Exercice",component:ExerciceComponent},
  {path:"student-Checkpoint",component:CheckpointComponent},
  {path:"student-Messanger",component:MessangerComponent},
  {path:"student-Account",component:ManageAccountComponent},
  //student path 
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'request',component:RequestComponent},
  {path:'admin',component:AdminComponent},
  {path:'**',component:ErrorsComponent}
]
FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin
])

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    StudentComponent,
    HomeComponent,
    TeatchersComponent,
    AdminComponent,
    ErrorsComponent,
     ProfilComponent,
     RequestComponent,
     NavbarComponent,
     CardComponent,
     NavbarComponent1,
     SidebarComponent,
     LectureComponent,
     CheckpointComponent,
     ExerciceComponent,
     SignInComponentStudent,
     SignUpComponentStudent,
    SidebareComponent,
    StatsComponent,
    ErrorsComponent,
     ProfilComponent,
     SigninComponent,
     SignupComponent,
     RequestComponent,
     NavbarComponent,
     CardComponent,
     ManageAccountComponent,
     MessangerComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
