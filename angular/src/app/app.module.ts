import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorsComponent } from './errors/errors.component';

import { ProfilComponent } from './teacher/profil/profil.component';
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
import {CalendarstudentComponent} from "./student/calendarstudent/calendarstudent.component"
/*student*/
import { ReactiveFormsModule } from '@angular/forms';
// teacher
import { TeacherComponent } from './teacher/teacher.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import { ChckpointToDoComponent } from './student/checkpoint/chckpoint-to-do/chckpoint-to-do.component';
import { SigninComponent } from './home/signin/signin.component';
import { SignupComponent } from './home/signup/signup.component';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { PageService } from '@syncfusion/ej2-angular-grids';
import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { PieSeriesService, AccumulationTooltipService, AccumulationDataLabelService } from '@syncfusion/ej2-angular-charts';
import {
  LineSeriesService, DateTimeService, DataLabelService, StackingColumnSeriesService, CategoryService,
  StepAreaSeriesService, SplineSeriesService, ScrollBarService, ChartAnnotationService, LegendService, TooltipService, StripLineService,
  SelectionService, ScatterSeriesService, ZoomService, ColumnSeriesService, AreaSeriesService, RangeAreaSeriesService
} from '@syncfusion/ej2-angular-charts';
//Admin//
import { StudentsComponent } from './admin/students/students.component';
import { HomevueComponent } from './admin/homevue/homevue.component';
import { StatsComponent } from './admin/stats/stats.component';
import { SidebareComponent } from './admin/sidebare/sidebare.component';
import { TeatchersComponent } from './admin/teatchers/teatchers.component';
import { AdminComponent } from './admin/admin.component';
import { ClassComponent } from './admin/class/class.component';
import { CardComponent } from './teacher/card/card.component';
import { NavbarComponent } from './teacher/navbar/navbar.component';
import { CreatLectureComponent } from './teacher/creat-lecture/creat-lecture.component';
import { CalanderComponent } from './teacher/calander/calander.component';
import { RequestComponent } from './teacher/request/request.component';
import { ChatComponent } from './teacher/chat/chat.component';
import { FormsModule } from '@angular/forms';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  //teacherpath
  {path:'teacher',component:TeacherComponent},
  {path:'profil',component:ProfilComponent},
  {path:'request',component:RequestComponent},
  {path:'chat',component:ChatComponent},
  //student path component
  {path:'cours',component:CreatLectureComponent},
  {path:'calander/student',component:CalendarstudentComponent},
  {path:"student",component:StudentComponent},
  {path:"signup-student",component:SignUpComponentStudent},
  {path:"student-Signin",component:SignInComponentStudent},
  {path:"student-Lecture",component:LectureComponent},
  {path:"student-Exercice",component:ExerciceComponent},
  {path:"student-Checkpoint",component:CheckpointComponent},
  {path:"student-Messanger",component:MessangerComponent},
  {path:"student-Account",component:ManageAccountComponent},
  //student path 
  {path:"calendar",component:CalanderComponent},
  {path:"lecture",component:LectureComponent},
  //student path
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'request',component:RequestComponent},
  {path:'admin',component:AdminComponent},
  {path:'teatchers',component:TeatchersComponent},
  {path:'stats',component:StatsComponent},
  {path:'students',component:StudentsComponent},
  {path:'class',component:ClassComponent},
  {path:'**',component:ErrorsComponent}
]
FullCalendarModule.registerPlugins([
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
     CalendarstudentComponent,
     StatsComponent,
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
     CalanderComponent,
     ChckpointToDoComponent,
   
     StudentsComponent,
     HomevueComponent,
     ClassComponent,
     ChatComponent,
     LectureComponent
  ],
  imports: [
  BrowserModule,
  GridModule,
  DialogModule,
  ChartModule,
  AccumulationChartModule,
  RouterModule.forRoot(appRoutes),
    FullCalendarModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [LineSeriesService, DateTimeService, ColumnSeriesService, DataLabelService, ZoomService, StackingColumnSeriesService, CategoryService,
    StepAreaSeriesService, SplineSeriesService, ChartAnnotationService, LegendService, TooltipService, StripLineService,
    PieSeriesService, AccumulationTooltipService, ScrollBarService, AccumulationDataLabelService, SelectionService, ScatterSeriesService,
    PageService, AreaSeriesService, RangeAreaSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }