import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
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

  }

