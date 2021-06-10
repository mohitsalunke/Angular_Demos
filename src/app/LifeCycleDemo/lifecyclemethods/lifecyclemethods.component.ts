import { Component, OnInit, DoCheck, AfterContentInit, 
  AfterViewInit, AfterViewChecked, OnDestroy,
   AfterContentChecked, 
   OnChanges } from '@angular/core';

@Component({
  selector: 'app-lifecyclemethods',
  templateUrl: './lifecyclemethods.component.html',
  styleUrls: ['./lifecyclemethods.component.css']
})
export class LifecyclemethodsComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked,  
AfterViewInit,  
AfterViewChecked,  
OnDestroy,OnChanges  {

 data:number=100;
  constructor() {

    console.log(`new - data is ${this.data}`);
   }

   ngOnInit() {
    console.log(`ngOnInit  - data is ${this.data}`);
   }

ngOnChanges() {
  console.log(`ngOnChanges - data is ${this.data}`);
}

ngDoCheck() {
  console.log("********************");
  console.log("in doCheck =>ngDoCheck")
}

ngAfterContentInit() {
  console.log("ngAfterContentInit");
}

ngAfterContentChecked() {
  console.log("ngAfterContentChecked");
}

ngAfterViewInit() {
  console.log("ngAfterViewInit");
}

ngAfterViewChecked() {
  console.log("ngAfterViewChecked");
  console.log("********************");
}
ngOnDestroy() {
  console.log("ngOnDestroy");
}

fnAddNumber():void{
  this.data+=100;
}
deleteNumber():void{
  this.data -=10;
}

}
