import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  
  templateUrl: './contact1.component.html',
  styleUrls: ['./contact1.component.css']
})
export class Contact1Component implements OnInit {

  id:number=0;
  constructor(private activateroute:ActivatedRoute) { }

  ngOnInit(): void {
     this.activateroute.params.subscribe(param=>{this.id=param['id']})
  }

}
