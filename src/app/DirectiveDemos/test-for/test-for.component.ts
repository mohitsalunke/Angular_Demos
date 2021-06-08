import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-for',
  templateUrl: './test-for.component.html',
  styleUrls: ['./test-for.component.css']
})
export class TestForComponent  {

  employees:any[];
  searchText:string="";

  constructor() {
    this.employees=[
      {
        Code: 'emp101', name:'Mohit', gender:'Male',
        salary:5500,fulltime:true

      },
      {
        Code: 'emp102', name:'Rohit', gender:'Male',
        salary:55000,fulltime:true

      },
      {
        Code: 'emp103', name:'Krish', gender:'Male',
        salary:500,fulltime:false

      }
    ]
    }
   }


