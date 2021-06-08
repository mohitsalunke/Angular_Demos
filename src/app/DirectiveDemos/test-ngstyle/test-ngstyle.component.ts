import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ngstyle',
  templateUrl: './test-ngstyle.component.html',
  styleUrls: ['./test-ngstyle.component.css']
})
export class TestNgstyleComponent implements OnInit {
  text:string='Mohit Is Awesome';
  mystyle:string="italic";
  mycolor:string="blue";
  mysize:number=20;
  displaytext:string="show-class";
  visible:boolean=true;
   
  csscolor:string='green';
  constructor() { }

  getFontName():string{
    return 'italic-text';
  }

  ngOnInit(): void {
  }

}
