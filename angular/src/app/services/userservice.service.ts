import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { 


  }
  getRegisterData(){

    return this.http.get('http://localhost:3000/student')
  }

  managaAccount(body){
  
    const headers={'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50X2lkIjoiNjE3MmRmNDdlYzM1Y2U0ZGVjODRmNTFmIiwiRW1haWwiOiJhYUBnbWFpbC5jb20iLCJpYXQiOjE2MzQ5MTgyMTUsImV4cCI6MTYzNDkyMTgxNX0.b0SNKAuKtehXxPq5OqS77ZD7PwjS8ecqG_oTJKrLr0Y'}
    return this.http.put(`http://localhost:3000/student/update/id`,body ,{headers})
   }
  }

