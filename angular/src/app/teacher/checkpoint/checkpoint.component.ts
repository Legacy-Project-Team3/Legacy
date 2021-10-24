import { Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms'

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

  constructor() { }

  ngOnInit(): void {
  }
  
  add(form:NgForm){
    let result  = {} as any;
     result={Quiz:form.value}
    this.quizArray.push(result);  
    console.log(result)
    console.log(this.quizArray)
  }

  Save(){
    const element = document.createElement("input");
    element.setAttribute("type", "text")
    element.setAttribute("placeholder", "Title")
    element.setAttribute("class","appearance-none block w-full bg-white text-gray-700  border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none focus:border-gray-500");
    document.getElementById("title").appendChild(element)  
  }

}
