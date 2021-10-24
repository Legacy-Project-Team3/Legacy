import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { 


  }
  registerAndGetRegisterData(body){

    return this.http.post('http://localhost:3000/student/register',body)
  }

  managaAccount(body ,Authorization,id ){
  
    const headers={'Authorization':`${Authorization}`}
    return this.http.put(`http://localhost:3000/student/update/${id}`,body ,{headers})
   }
   signIn(body){
     return this.http.post(`http://localhost:3000/student/login`,body)
   }
    //Get All the teacher
    getAll():Observable<any> {
      return this.http.get('http://localhost:3000/teacher');
     }
     //delete One teacher
     delete(body,id):Observable<any> {
         return this.http.delete(`${'http://localhost:3000/teacher'}/${id}`,body);
     }
     //Get All Student
   getAllS():Observable<any>{
     return this.http.get('http://localhost:3000/student');
   }
   // Get All Classes
   getAllC(body):Observable<any>{
     return this.http.post('http://localhost:3000/class',body)
   }
  }

