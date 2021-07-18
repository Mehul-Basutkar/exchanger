import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent {
  fp = this.fb.group({
    email:['', [Validators.required, Validators.minLength(10)]]
  });

  errMsg = {
    email:[
      {type:'required', message:'please enter valid email'},
      {type:'minLength', message: 'email must be 10 characher long'}
    ]
  };

  constructor(private fb:FormBuilder) { }
  
  submit(){
    console.log(this.fp.value);
    this.fp.reset();
  }

}
