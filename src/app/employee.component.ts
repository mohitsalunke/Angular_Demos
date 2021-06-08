import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  Empid:number;
  Empname:string;
  Empdept:string;
  Bsalary:number;
  Hra:number;
  Da:number;
  Gsalary:number;


  constructor() { 

    this.Empid=0;
    this.Empname="";
    this.Empdept="";
    this.Bsalary=0;
    this.Hra=0;
    this.Da=0;
    this.Gsalary=0;
  }

  calculateGross():void
  {
    if(this.Bsalary<=10000)
                {
                    this.Hra=(this.Bsalary*20)/100;
                    this.Da=(this.Bsalary*80)/100;
                    
                }
                else if(this.Bsalary<=20000)
                {
                    this.Hra=(this.Bsalary*20)/100;
                    this.Da=(this.Bsalary*80)/100;
                    
                }
                else if(this.Bsalary>20000)
                {
	                  this.Hra=(this.Bsalary*30)/100;
	                  this.Da=(this.Bsalary*95)/100;
                }
  }

  ngOnInit(): void {
  }

}
