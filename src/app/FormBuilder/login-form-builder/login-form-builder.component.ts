import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form-builder',
  templateUrl: './login-form-builder.component.html',
  styleUrls: ['./login-form-builder.component.css']
})
export class LoginFormBuilderComponent implements OnInit {

  authForm:FormGroup;

  constructor(private fb:FormBuilder) {

    this.authForm=this.fb.group({
      'email':['',Validators.required],
      'password':['',Validators.required]

    })
   }

   onSubmit()
   {
     let credentials=this.authForm.value;
     console.log(credentials);
   }

  ngOnInit(): void {
  }

}
