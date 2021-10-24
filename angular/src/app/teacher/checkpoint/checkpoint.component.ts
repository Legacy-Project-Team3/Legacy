import { Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms'
import { JwtHelperService } from "@auth0/angular-jwt";
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-checkpoint',
  templateUrl: './checkpoint.component.html',
  styleUrls: ['./checkpoint.component.css']
})
export class TeacherCheckpointComponent implements OnInit {
    Question: string;
    Answer1: string;
    Answer2: string;
    Answer3: string;
    RightAnswer: string;

    quizArray= [] as any;
    Title: any;
    dataTeacher:any;
    teacherId:string;


  constructor(private router:Router,private userservice:UserserviceService) { }

  ngOnInit(): void {

    const helper = new JwtHelperService();
    var Token = localStorage.getItem("acces_token");
    if(!Token){
      this.router.navigate(["../teacher/signup"])
    }
    this.dataTeacher = helper.decodeToken(Token)
    console.log(this.dataTeacher)
  }


  add(form:NgForm){
    let result  = {} as any;
     result={Quiz:form.value}
    this.quizArray.push(result);
    console.log(result)
    console.log(this.quizArray)
  }

  Save(){
    //creating the input field on click
    const element = document.createElement("input");
    element.setAttribute("type", "text")
    element.setAttribute("placeholder", "Title")
    element.setAttribute("name", "Title")
    element.setAttribute("id", "inputTitle")
    element.setAttribute("class","appearance-none block w-full bg-white text-gray-700  border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-gray-500");
    document.getElementById("title").appendChild(element)

  }

  Submit() {
    //getting the value of all inputs and pushing them intp quizArray
    // console.log(form1.value)
    // this.userservice.createTeacher({...form1.value}).subscribe(res=>{
    //   console.log(res);



    // })
    this.Title = (<HTMLInputElement>document.getElementById("inputTitle")).value;
    console.log(this.Title)
    this.quizArray.push(this.Title);
    console.log('second',this.quizArray)
  }

}
