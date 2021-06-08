import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myinfo',
  templateUrl: './myinfo.component.html',
  styleUrls: ['./myinfo.component.css']
})
export class MyinfoComponent implements OnInit {

  firstname:string;
  lastname:string;
  mob:number;
  technology:string;
  msg:string;

  constructor() { 
  this.firstname="mohit";
  this.lastname="salunke";
  this.mob=965655665; 
  this.technology="Java";
  this.msg="";
  
}

  ngOnInit(): void {
  }

  showMsg():void{
    this.msg="Angular is Awesome";
  }

  clearMsg():void{
    this.msg="";
  }

}
