import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
 data:any;
  constructor() { }

  ngOnInit(): void {
  }
   onClick(studentForm:any){
     this.data=studentForm;

   }

}
