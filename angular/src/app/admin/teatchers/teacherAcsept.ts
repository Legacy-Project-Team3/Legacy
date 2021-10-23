import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"

@Injectable({providedIn: "root"})
export class teacherAscept{
    constructor(private http:HttpClient){}
    AcceptTeacher ( email : String , password:String) {
    this.http.post("http://localhost:3000/teacher")
    }
}