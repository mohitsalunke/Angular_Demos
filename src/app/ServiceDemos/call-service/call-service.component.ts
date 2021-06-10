import { Component, OnInit } from '@angular/core';
import { HelloService } from '../hello.service';

@Component({
  selector: 'app-call-service',
  templateUrl: './call-service.component.html',
  styleUrls: ['./call-service.component.css'],
  providers:[HelloService]
})
export class CallServiceComponent implements OnInit {
  msg:string;
  constructor(private serObj:HelloService) {
    this.msg="";
   }

  ngOnInit(): void {
  }

  call():void
  {
    this.msg=this.serObj.heyHello();
  }

}
