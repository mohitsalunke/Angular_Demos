import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-msg',
  templateUrl: './msg-component.component.html',
  styleUrls: ['./msg-component.component.css']
})
export class MsgComponentComponent implements OnInit {

  @Input() prefixMsg:string;
  @Input() siteName:string;
  constructor() {  
    this.prefixMsg="";
    this.siteName="";


   }

  ngOnInit(): void {
  }

}
