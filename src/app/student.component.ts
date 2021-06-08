import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  rollno:number;
  name:string;
  Eng:number;
  Math:number;
  Sci:number;
  Marathi:number;
  total:number;
  percentage:number;


  constructor() {

    this.rollno=0;
    this.name="";
    this.Eng=0;
    this.Math=0;
    this.Sci=0;
    this.Marathi=0;
    this.total=0;
    this.percentage=0;

   }

   calculate():void{

    
    this.total=this.Eng+this.Math+this.Marathi+this.Sci;

    this.percentage=(this.total/400)*100;
   }

  ngOnInit(): void {
  }

}
