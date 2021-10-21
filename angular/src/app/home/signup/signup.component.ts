import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import Validation from '../../utils/validation';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name: string;
  email : string;
  password : string;

  formi: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formi = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.formi.controls;
  }
// onSubmit(form: NgForm){
//  console.log(form.value)
// }
onSubmit(): void {
  this.submitted = true;

  if (this.formi.invalid) {
    return;
  }

  console.log(JSON.stringify(this.formi.value, null, 2));
}
onReset(): void {
  this.submitted = false;
  this.formi.reset();
}
}