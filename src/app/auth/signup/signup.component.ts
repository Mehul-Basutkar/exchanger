import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm = this.fb.group({
    email:['', [Validators.required, Validators.email, Validators.minLength(10)]],
    password:['', [Validators.required, Validators.minLength(7)]],
    cpassword:['',[Validators.required, Validators.minLength(7)]]
  });

  constructor(private fb: FormBuilder, private router:Router) { }

  public errMsg = {
    email: [
      {type:'required', message: 'please insert valid email id'},
      {type:'minLength', message: 'email length must be 10 character long'}
    ],
    password:[
      {type:'required', message: 'please insert valid password'},
      {type:'minLength', message: 'password length must be 7 character long'}
    ],
    cpassword:[
      {type:'required', message: 'please insert valid password'},
      {type:'minLength', message: 'password length must be 7 character long'}
    ]
  };
  

  submit(){
    console.log(this.signupForm.value);
    this.signupForm.reset();
    this.router.navigate(['/auth']);
  }

}
