import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-servise',
  templateUrl: './employee-servise.component.html',
  styleUrls: ['./employee-servise.component.css'],
  providers:[EmployeeService]
})
export class EmployeeServiseComponent implements OnInit {
  data:any;
  constructor(private sevObj:EmployeeService) { 

    this.data=this.sevObj.employeeArr;
  }

  add(empdata:any)
  {
    //console.log("Iam i add");
    this.data=empdata;
    //console.log(empdata);
    this.sevObj.add(empdata);
    console.log(this.sevObj.employeeArr);
    this.data=this.sevObj.employeeArr;

  }

  resetForm(){
    this.data.reset();
  }

  remove(empdata:any)
  {
    console.log("i,m in component remove");
    this.sevObj.remove(empdata);
    
  }

  ngOnInit(): void {
  }

}
