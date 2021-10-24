import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }
  postevent(data){
return this.http.post('http://localhost:3000'+'/event',data)

  }
  get(){
    return this.http.get('http://localhost:3000'+'/getevent')

      }
   getAllstudent(){
        return this.http.get('http://localhost:3000'+'/student')
      }

}
