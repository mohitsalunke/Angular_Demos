import { Component, OnInit } from '@angular/core';

@Component({
  
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  home:string="Welcome to home page";
  constructor() { }

  ngOnInit(): void {
  }

}
