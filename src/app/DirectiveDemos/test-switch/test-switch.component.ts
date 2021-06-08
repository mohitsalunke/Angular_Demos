import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-switch',
  templateUrl: './test-switch.component.html',
  styleUrls: ['./test-switch.component.css']
})
export class TestSwitchComponent implements OnInit {

  person:any[];


  constructor() { 
    this.person=[{
      id:101,
      name:'Mohit',
      addr:'bardapur',
      DOB:'09-09-1998',
      country:'India'
    },
    {
      id:102,
      name:'Rohit',
      addr:'badlapur',
      DOB:'09-08-1998',
      country:'Russia'
    },
    {
      id:103,
      name:'Tanmay',
      addr:'chandrapur',
      DOB:'05-09-1998',
      country:'Bangladesh'
    }
    ,
    {
      id:104,
      name:'Akash',
      addr:'Nanded',
      DOB:'09-09-1997',
      country:'Indonesia'
    }
  ]
  }

  ngOnInit(): void {
  }

}
