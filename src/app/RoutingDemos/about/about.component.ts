import { Component, OnInit } from '@angular/core';

@Component({
  
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
   about:string="Welcome To about page";
  constructor() { }

  ngOnInit(): void {
  }

}
