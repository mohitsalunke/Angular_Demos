import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycalculator',
  templateUrl: './mycalculator.component.html',
  styleUrls: ['./mycalculator.component.css']
})
export class MycalculatorComponent implements OnInit {

  num1:number;
  num2:number;
  add:number;
  sub:number;
  mul:number;
  div:number;


  constructor() {

    this.num1=12;
    this.num2=20;
    this.add=0;
    this.sub=0;
    this.mul=0;
    this.div=0;

   }

  ngOnInit(): void {
  }

  add1():number{
    this.add=this.num1+this.num2;
    return this.add;
  }

  sub1():number{
    this.sub=this.num2-this.num1;
    return this.sub;

  }

  mul1():number{
   this.mul=this.num1*this.num2;
    return this.mul
  }

  div1():number{
   this.div=this.num1/this.num2;
   return this.div;
  }

}
