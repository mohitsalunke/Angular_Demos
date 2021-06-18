import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponentM implements OnInit {
 name:string="";
  constructor() { }

  ngOnInit(): void {
  }

}
