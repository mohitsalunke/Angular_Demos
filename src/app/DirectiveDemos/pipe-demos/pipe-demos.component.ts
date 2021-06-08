import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demos',
  templateUrl: './pipe-demos.component.html',
  styleUrls: ['./pipe-demos.component.css']
})
export class PipeDemosComponent implements OnInit {

  Employees:any[];

  constructor() {

    this.Employees=[{

      Empid:101,Empname:"Mohit",Gender:"male",Designation:"Manager",YrofExp:10
    },
    {

      Empid:102,Empname:"Rohit",Gender:"male",Designation:"Hr",YrofExp:5
    },
    {

      Empid:103,Empname:"Shradha",Gender:"female",Designation:"Engineer",YrofExp:14
    },
    {

      Empid:104,Empname:"Tanmay",Gender:"male",Designation:"Tester",YrofExp:3
    }
  ]
   }

  ngOnInit(): void {
  }

}
