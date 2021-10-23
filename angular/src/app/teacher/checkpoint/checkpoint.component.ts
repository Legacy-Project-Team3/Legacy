import { Component, OnInit } from '@angular/core';
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

  onSave(form:NgForm){
  console.log(form.value)
  }

}
