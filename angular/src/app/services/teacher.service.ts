import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { TeacherData } from './teacher-data.model';

@Injectable({providedIn: "root"})
export class teacherService{

    constructor(private http: HttpClient){

    }

    CreateTeacher(Role: string, TeacherName: string, TeacherLastName: string, Password: string, ImageUrl: string, Email: string, Field: string, Phone: string, Experience: string){
        const teacherData: TeacherData = { Role: Role, TeacherName: TeacherName, TeacherLastName: TeacherLastName, Password: Password, ImageUrl: ImageUrl, Email: Email, Field: Field, Phone: Phone, Experience: Experience}
        this.http.post("http://localhost:3000/teacher/signup", teacherData)
        .subscribe(response =>{
            console.log(response);
        })
    }

    // CreateTeacher(Role: string, TeacherName: string, TeacherLastName: string, Password: string, ImageUrl: string, Email: string, Field: string, Phone: string, Experience: string){
    //     const teacherData: TeacherData = { Role: Role,TeacherName: TeacherName, TeacherLastName: TeacherLastName, Password: Password, ImageUrl: ImageUrl, Email: Email, Field: Field, Phone: Phone, Experience: Experience}
    //     this.http.post("http://localhost:3000/teacher/signup", teacherData)
    //     .subscribe(response =>{
    //         console.log(response);
    //     })
    // }
    deleteTeacher(id){
      this.http.delete('http://localhost:3000/'+'admin/teacher/'+id).subscribe((res)=>console.log(res))
      
    }
}
