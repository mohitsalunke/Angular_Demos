import { Component, OnInit } from '@angular/core';

@Component({
  
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  
  message:string="Welcome to message page";
  constructor() { }

  ngOnInit(): void {
  }

}
