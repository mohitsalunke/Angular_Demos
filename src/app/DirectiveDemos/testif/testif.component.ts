import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testif',
  templateUrl: './testif.component.html',
  styleUrls: ['./testif.component.css']
})
export class TestifComponent implements OnInit {

  appTitle:string ='Wecome to';
  status: boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

}
