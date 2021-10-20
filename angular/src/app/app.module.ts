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
import {NavbarComponent1} from "./student/navbar/navbar.component";
import { SidebarComponent } from './student/sidebar/sidebar.component';
import { LectureComponent } from './student/lecture/lecture.component';
import { CheckpointComponent } from './student/checkpoint/checkpoint.component';
import { ExerciceComponent } from './student/exercice/exercice.component';
import { SignInComponent } from './student/sign-in/sign-in.component';
import { SignUpComponent } from './student/sign-up/sign-up.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { SigninComponent } from './home/signin/signin.component';
import { SignupComponent } from './home/signup/signup.component';
import { RequestComponent } from './request/request.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { CreatLectureComponent } from './creat-lecture/creat-lecture.component';
import { CalanderComponent } from './calander/calander.component';
import { StatsComponent } from './admin/stats/stats.component';
import { SidebareComponent } from './admin/sidebare/sidebare.component';
import { TeatchersComponent } from './admin/teatchers/teatchers.component';
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
   const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'teacher',component:TeacherComponent},
  {path:'profil',component:ProfilComponent},
  {path:'request',component:RequestComponent},
  {path:'cours',component:CreatLectureComponent},
  {path:'calander',component:CalanderComponent},
  {path:"student",component:StudentComponent},
  {path:"student-Signin",component:SignInComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'request',component:RequestComponent},
  {path:'admin',component:AdminComponent},
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
     StatsComponent,
     SidebarComponent,
     LectureComponent,
     CheckpointComponent,
     ExerciceComponent,
     SignInComponent,
     SignUpComponent,
     NavbarComponent1,
    SidebareComponent,
    StatsComponent,
    ErrorsComponent,
     ProfilComponent,
     SigninComponent,
     SignupComponent,
     RequestComponent,
     NavbarComponent,
     CardComponent
  ],
  imports: [
  BrowserModule,
  GridModule,
  DialogModule,
  ChartModule,
  AccumulationChartModule,
  RouterModule.forRoot(appRoutes)
  ],
  providers: [LineSeriesService, DateTimeService, ColumnSeriesService, DataLabelService, ZoomService, StackingColumnSeriesService, CategoryService,
    StepAreaSeriesService, SplineSeriesService, ChartAnnotationService, LegendService, TooltipService, StripLineService,
    PieSeriesService, AccumulationTooltipService, ScrollBarService, AccumulationDataLabelService, SelectionService, ScatterSeriesService,
    PageService, AreaSeriesService, RangeAreaSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }