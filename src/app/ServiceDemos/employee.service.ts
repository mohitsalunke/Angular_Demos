import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  employeeArr:any=[];

  constructor() { }

  add(emp:any):void{
    
    this.employeeArr.push(emp);
    console.log(this.employeeArr);
  }

  remove(empdata:any)
  {
    this.employeeArr.splice(empdata,1);
  }
}
