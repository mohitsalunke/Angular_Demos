import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-registration-form',
  templateUrl: './reactive-registration-form.component.html',
  styleUrls: ['./reactive-registration-form.component.css']
})
export class ReactiveRegistrationFormComponent implements OnInit {

  registrationForm:FormGroup;
  submitted:boolean=true;
  submittedData:any;
  constructor() {
    this.registrationForm=new FormGroup({
      firstname:new FormControl("Mohit"),
      lastsname:new FormControl("salunke"),
      phone:new FormControl("9527721566"),
      email:new FormControl("mohit@gmail.com"),
      address:new FormGroup({
        city:new FormControl("pune"),
        street:new FormControl("Mk gandhi"),
        pincode:new FormControl("431517")
      })
    });

    


   }

   save(fvalue:any) {
    //this.submitted = true;
    console.log(fvalue);
    this.submittedData=fvalue;
}

  ngOnInit(): void {
  }

}
