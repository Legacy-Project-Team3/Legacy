import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }
  postevent(data){
return this.http.post(environment.url+'/event',data)

  }
  get(){
    return this.http.get(environment.url+'/getevent')

      }
   getAllstudent(){
        return this.http.get(environment.url+'/student')
      }

}
