import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child-demo',
  templateUrl: './child-demo.component.html',
  styleUrls: ['./child-demo.component.css']
})
export class ChildDemoComponent {

  @Input()
  empname:string;
  @Output() send:EventEmitter<string>=new EventEmitter<string>();
  msg:string="Not-Found";

  
  empsArr=[{Eid:101,Ename:"Mohit"},{Eid:102,Ename:"Rohit"},{Eid:103,Ename:"Krishna"}];

  
  constructor() { 
  this.empname="";
  }

  onClick()
  {
    for(let e of this.empsArr)
    {
      if(e.Ename===this.empname)
      {
          this.msg="Emp Found";
          console.log(this.msg);
          break;
          
      }
     
    }
    this.send.emit(this.msg);
  }





 

}
