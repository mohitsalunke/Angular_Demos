import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-crud',
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css']
})
export class EmployeeCRUDComponent implements OnInit {

  Empid:number;
  Empname:string;
  Bsalary:number;
  hra:number;
  da:number;
  Gsalary:number;
  Employees:any[];
  selectedindex:number;
  isadded:boolean;
  isedited:boolean;





  constructor() {

    this.Empid=0;
    this.Empname="";
    this.Bsalary=0;
    this.hra=0;
    this.da=0;
    this.Gsalary=0;
    this.Employees=[];
    this.selectedindex=0;
    this.isadded=true;
    this.isedited=true;





   }

   AddEmp()
   {
    this.isadded=true;
     this.Employees.push({
        
      Empid:this.Empid,
      Empname:this.Empname,
      Bsalary:this.Bsalary,
      hra:this.hra,
      da:this.da,
      Gsalary:this.Gsalary

      

     })

     this.Empid=0;
     this.Empname="";
     this.Bsalary=0;
     this.hra=0;
     this.da=0;
     this.Gsalary=0;

   }

   remove(i:number){

    this.Employees.slice(i,1);
   }

   edit(i:number)
   {
     this.isedited=true;
     this.isadded=false;
     this.Empid=this.Employees[i].Empid;
     this.Empname=this.Employees[i].Empname;
     this.Bsalary=this.Employees[i].Bsalary;
     this.hra=this.Employees[i].hra;
     this.da=this.Employees[i].da;
     this.Gsalary=this.Employees[i].Gsalary;
   }

   UpdateEmp(){
    this.isedited=false;
    this.isadded=false;

    this.Employees[this.selectedindex].Empid=this.Empid;
    this.Employees[this.selectedindex].Empname=this.Empname;
    this.Employees[this.selectedindex].Bsalary=this.Bsalary;
    this.Employees[this.selectedindex].Hra=this.hra;
    this.Employees[this.selectedindex].da=this.da;
    this.Employees[this.selectedindex].Gsalary=this.Gsalary;

   }

   calculateGsalary(){
    if(this.Bsalary<=10000)
    {
        this.hra=(this.Bsalary*20)/100;
        this.da=(this.Bsalary*80)/100;
        this.Gsalary=this.Bsalary+this.hra+this.da;
        
    }
    else if(this.Bsalary<=20000)
    {
        this.hra=(this.Bsalary*20)/100;
        this.da=(this.Bsalary*80)/100;
        this.Gsalary=this.Bsalary+this.hra+this.da;
        
    }
    else if(this.Bsalary>20000)
    {
        this.hra=(this.Bsalary*30)/100;
        this.da=(this.Bsalary*95)/100;
        this.Gsalary=this.Bsalary+this.hra+this.da;
    }
    
    

   }



  ngOnInit(): void {
  }

}
