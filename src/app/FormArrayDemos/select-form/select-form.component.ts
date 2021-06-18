import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-select-form',
  templateUrl: './select-form.component.html',
  styleUrls: ['./select-form.component.css']
})
export class SelectFormComponent{

  submitted = false;
  frameWork: any = ['Angular', 'Hibernate', 'Spring', 'SpringBoot']

  constructor(public fb: FormBuilder) { }

  frameworkForm = this.fb.group({
    name: ['', [Validators.required]]
  })

  
  public handleError = (controlName: string, errorName: string) => {
    return this.frameworkForm.controls[controlName].hasError(errorName);
  }

  onSubmit() {
    this.submitted = true;
    alert(JSON.stringify(this.frameworkForm.value))
  }
}

