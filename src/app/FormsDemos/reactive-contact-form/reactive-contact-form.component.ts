import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-contact-form',
  templateUrl: './reactive-contact-form.component.html',
  styleUrls: ['./reactive-contact-form.component.css']
})
export class ReactiveContactFormComponent implements OnInit {

  contactForm:FormGroup;

  constructor() {

    this.contactForm=new FormGroup({
      firstname:new FormControl("",Validators.compose([Validators.required,Validators.minLength(5)])),
      lastname:new FormControl("",Validators.compose([Validators.required,Validators.maxLength(9)])),
      address:new FormGroup({
        city:new FormControl("",Validators.compose([Validators.required])),
        street:new FormControl(),
        pincode:new FormControl("",Validators.compose([Validators.pattern('^[0-9]{6}$')]))
      })
    })
   }

   onSubmit() {
    console.log(this.contactForm.value);
}

  ngOnInit(): void {
  }

}
