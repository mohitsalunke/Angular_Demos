import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-login',
  templateUrl: './my-login.component.html',
  styleUrls: ['./my-login.component.css']
})
export class MyLoginComponent implements OnInit {

  username:string;
  password:string;
  msg:string;


  constructor() {
    this.username="";
    this.password="";
    this.msg="";
   }

   validate():void{
     if(this.username==this.password)
     {
        this.msg="Welcome to my page "
     }
     else{
       this.msg="Invalid Credentials"
     }
   }

  ngOnInit(): void {
  }

}
