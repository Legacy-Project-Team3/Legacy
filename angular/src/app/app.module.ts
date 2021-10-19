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
import { SidebarComponent } from './student/sidebar/sidebar.component'

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
     SidebarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
