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
    Title: String;
    dataTeacher:any;
    teacherId:string;


  constructor(private router:Router,private userservice:UserserviceService) { }

  ngOnInit(): void {
    console.log("az")
    const helper = new JwtHelperService();
    var Token = localStorage.getItem("acces_token");
    this.dataTeacher = helper.decodeToken(Token)
    this.teacherId=this.dataTeacher.teacher_id
      console.log(this.dataTeacher.Role)
    if(!Token || helper.isTokenExpired(Token)===true || this.dataTeacher.Role!=="Teacher" ){
      this.router.navigate(["../teacher/signup"])
    }
       
  }


  add(){
    let result  = {} as any;
     result={Question:this.Question,Answer1:this.Answer1,Answer2:this.Answer2,Answer3:this.Answer3,RightAnswer:this.RightAnswer}
    this.quizArray.push(result);

    console.log(this.quizArray,this.Answer1)
  }

  
  Save(){ 
   
    const element = document.createElement("input");
    element.setAttribute("type", "text")
    element.setAttribute("placeholder", "Title")
    element.setAttribute("name", "Title")
    element.addEventListener("change",this.onTypeTilte)
    element.setAttribute("class","appearance-none block w-full bg-white text-gray-700  border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-gray-500");
    document.getElementById("title").appendChild(element)

  }
  onTypeTilte=($event)=>{
   return  this.Title=$event.target.value;
  }
  onChangeCheck=(e)=>{
    this[e.target.name]=e.target.value
  }
  Submit=() =>{
    this.userservice.createCheckpoint({quizArray:this.quizArray,name:this.Title},this.teacherId).subscribe(res=>{
        console.log(res)
      })   
}

}
