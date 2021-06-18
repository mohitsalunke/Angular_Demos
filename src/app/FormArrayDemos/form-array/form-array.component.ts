import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

  angForm= new FormGroup({
    names:new FormArray([
      new FormControl('',Validators.required),
      new FormControl('',Validators.required)
    ])
  })

  get names():FormArray{

    return this.angForm.get('names') as FormArray;

  }

  onFormSubmit():void
  {
      for(let i=0;i<this.names.length;i++)
      {
          console.log(this.names.at(i).value)
      }
  }

  addNames()
  {
    this.names.push(new FormControl('',Validators.required));
  }

  deleteNames(index:number)
  {
    if(this.names.length !==1)
    {
      this.names.removeAt(index);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
