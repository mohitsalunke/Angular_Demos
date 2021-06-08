import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  firstName:string;
  lastName:string;
  email:string;
  mob:number;
  quali:string;
  DOB:string;


  constructor() { 

    this.firstName="";
    this.lastName="";
    this.email="";
    this.mob=0;
    this.quali="";
    this.DOB="";
  }

  

  ngOnInit(): void {
  }

}
