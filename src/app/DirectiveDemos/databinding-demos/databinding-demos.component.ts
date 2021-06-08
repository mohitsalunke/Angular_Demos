import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding-demos',
  templateUrl: './databinding-demos.component.html',
  styleUrls: ['./databinding-demos.component.css']
})
export class DatabindingDemosComponent implements OnInit {

  // name:string="MohitSoftware";
  // url:string="www.google.com";
  // logopath:string='./assets/wp3703420.jpg';
  // description:string="Website";
  // textdisabled:boolean=false;

  flag:boolean= true;
	website = {
	     name : 'TechnoSolutions',
	     url : 'http://www.TechnoloSolutions.com',
	     //logo : 'favicon.ico',
	     description: 'This is description of the site'
	};
  constructor() { }

  ngOnInit(): void {
  }

}
