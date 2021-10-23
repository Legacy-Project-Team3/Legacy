

import { HttpClientModule } from '@angular/common/http';
import { Component, Directive, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';  

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorsComponent } from './errors/errors.component';
import { ProfilComponent } from './teacher/profil/profil.component';
import { SigninComponent } from './home/signin/signin.component';
import { SignupComponent } from './home/signup/signup.component';

/*student*/
import { StudentComponent } from './student/student.component';
import { SignInComponentStudent } from './student/sign-in/sign-in.component';
import { SignUpComponentStudent } from './student/sign-up/sign-up.component';
import {NavbarComponent1} from "./student/navbar/navbar.component";
import { SidebarComponent } from './student/sidebar/sidebar.component';
import { LectureComponent } from './teacher/lecture/lecture.component';
import { CheckpointComponent } from './student/checkpoint/checkpoint.component';
import { ExerciceComponent } from './student/exercice/exercice.component';
import { MessangerComponent } from './student/messanger/messanger.component';
import { ManageAccountComponent } from './student/manage-account/manage-account.component';
import { CalendarComponent } from './student/calendar/calendar.component';
// teacher
import { TeacherComponent } from './teacher/teacher.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CardComponent } from './teacher/card/card.component';
import { NavbarComponent } from './teacher/navbar/navbar.component';
import { CreatLectureComponent } from './teacher/creat-lecture/creat-lecture.component';
import { CalanderComponent } from './teacher/calander/calander.component';
import { RequestComponent } from './teacher/request/request.component';

import { CheckpointToDoComponent } from './student/checkpoint/checkpoint-to-do/checkpoint-to-do.component';
import { AuthGuardService as AuthGard } from './auth-guard.service';
//admin//
import { ChatComponent } from './teacher/chat/chat.component';
import { SigninteacherComponent } from './teacher/signinteacher/signinteacher.component';
import { SignupteacherComponent } from './teacher/signupteacher/signupteacher.component';

import { StudentsTabelComponent } from './admin/students-tabel/students-tabel.component';
import { StudentNavBarComponent } from './admin/student-nav-bar/student-nav-bar.component';
import { ComingRequestComponent } from './admin/coming-request/coming-request.component';
import { ClassComponent } from './admin/class/class.component';
import { HomevueComponent } from './admin/homevue/homevue.component';
import { StatsComponent } from './admin/stats/stats.component';
import { SidebareComponent } from './admin/sidebare/sidebare.component';
import { TeatchersComponent } from './admin/teatchers/teatchers.component';
import { AdminComponent } from './admin/admin.component';
const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  //teacherpath
  {path:'teacher',component:TeacherComponent},
  {path:'profil',component:ProfilComponent},
  {path:'request',component:RequestComponent},
  {path:'chat',component:ChatComponent},

  {path: 'teacher/signup', component:SignupteacherComponent},
  {path: 'teacher/signin', component:SigninteacherComponent},

  //student path component
  {path:'cours',component:CreatLectureComponent},
  {path:'calander',component:CalanderComponent},
  {path:"student",component:StudentComponent},
  {path:"signup-student",component:SignUpComponentStudent},
  {path:"student-Signin",component:SignInComponentStudent},
  {path:"student-Exercice",component:ExerciceComponent},
  {path:"student-Checkpoint",component:CheckpointComponent},
  {path:"student-Messanger",component:MessangerComponent},
  {path:"student-Account",component:ManageAccountComponent},
  {path:"lecture",component:LectureComponent},
  //student path

  {path:'lecture',component:LectureComponent},
  {path:'chat',component:ChatComponent},



  //home path
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  { path: 'home', component: AppComponent ,canActivate : [AuthGard] },
  // admin path
  {path:'admin',component:AdminComponent},
  {path:'class',component:ClassComponent},
  {path:'teatchers',component:TeatchersComponent},
  {path:'stats',component:StatsComponent},
  {path:'studentTabel',component:StudentsTabelComponent},
  {path:'homeVue',component:HomevueComponent},
  {path:'comingreq',component:ComingRequestComponent},
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
     CreatLectureComponent,
     CalanderComponent,
     SidebarComponent,
     LectureComponent,
     CheckpointComponent,
     ExerciceComponent,
     SignInComponentStudent,
     SignUpComponentStudent,
     NavbarComponent1,
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
     MessangerComponent,
     CalendarComponent,
     ChatComponent,
     LectureComponent,
     ClassComponent,
     HomevueComponent,
     CheckpointToDoComponent,
     ChatComponent,
     SignupteacherComponent,
     StudentsTabelComponent,
     StudentNavBarComponent,
     ComingRequestComponent,
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    ReactiveFormsModule,
    FormsModule,

    HttpClientModule,

    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
