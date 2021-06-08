import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-demo',
  templateUrl: './parent-demo.component.html',
  styleUrls: ['./parent-demo.component.css']
})
export class ParentDemoComponent implements OnInit {

  names:string;
  fromchild:string="";
  constructor() {
    this.names="";
   }

   onSend(msg:string){
     this.fromchild=msg;
   }

  ngOnInit(): void {
  }

}
