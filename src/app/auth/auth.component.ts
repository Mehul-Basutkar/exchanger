import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(10)]],
    password: ['', [Validators.required, Validators.minLength(7)]]
  });
  
  constructor(private fb: FormBuilder) { }

  public errMsg = {
    email:[
      { type:'required', message: 'Please insert email id'},
      { type: 'minLength', message: 'email must be 10 character long'}
    ],
    password:[
      { type:'required', message: 'Please insert valid password'},
      { type: 'minLength', message: 'password must be 7 character long'}
    ]
  };
  

  submit(){
    console.log(this.loginForm.value);
    this.loginForm.reset();
  }

}
