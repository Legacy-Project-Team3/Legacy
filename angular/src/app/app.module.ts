import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorsComponent } from './errors/errors.component';
import { ProfilComponent } from './profil/profil.component';
import { RequestComponent } from './request/request.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import {NavbarComponent1} from "./student/navbar/navbar.component";
import { SidebarComponent } from './student/sidebar/sidebar.component';
import { LectureComponent } from './student/lecture/lecture.component';
import { CheckpointComponent } from './student/checkpoint/checkpoint.component';
import { ExerciceComponent } from './student/exercice/exercice.component';
import { SignInComponent } from './student/sign-in/sign-in.component';
import { SignUpComponent } from './student/sign-up/sign-up.component'

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'teacher',component:TeacherComponent},
  {path:'profil',component:ProfilComponent},
  {path:'request',component:RequestComponent},
  {path:"student",component:StudentComponent},
  {path:'**',component:ErrorsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    StudentComponent,
    HomeComponent,
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
     SignInComponent,
     SignUpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
