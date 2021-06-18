import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rective-validation-form',
  templateUrl: './rective-validation-form.component.html',
  styleUrls: ['./rective-validation-form.component.css']
})
export class RectiveValidationFormComponent  {
  data:any=[];
  
  userForm:FormGroup;
  country=['USA','India','Italy'];

  constructor() {

    this.userForm= new FormGroup({
      username:new FormControl("",Validators.compose([Validators.required,Validators.minLength(8)])),
      password:new FormControl("",Validators.compose([Validators.required,Validators.minLength(8)])),
      email:new FormControl("",Validators.compose([Validators.required,Validators.pattern("[a-zA-Z0-9]+@[a-z]+[.][a-z]")])),
      gender:new FormControl(),
      coununty:new FormControl(),
      contactDetails:new FormGroup({
        landline:new FormControl(),
        mobile:new FormControl()

      })


      
    })

    }

    onSubmit(userdata:any)
    {
       this.data=userdata;
    }
   }

  


