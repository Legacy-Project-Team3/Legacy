import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorsComponent } from './errors/errors.component';
<<<<<<< HEAD
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
=======
import { ProfilComponent } from './profil/profil.component';
>>>>>>> 431b8225b62c8ae0524b74da86c26ab1bb0de755
const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'teacher',component:TeacherComponent},
  {path:'profil',component:ProfilComponent},

  {path:'**',component:ErrorsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    StudentComponent,
    HomeComponent,
    AdminComponent,
<<<<<<< HEAD
    SharedComponent,
    ErrorsComponent,
    NavBarComponent,
=======

    ErrorsComponent,
     ProfilComponent
>>>>>>> 431b8225b62c8ae0524b74da86c26ab1bb0de755
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
