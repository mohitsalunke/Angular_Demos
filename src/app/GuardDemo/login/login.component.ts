import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuardServiceService } from '../guard-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[GuardServiceService]
})
export class LoginComponent implements OnInit {

  constructor(private serObj:GuardServiceService,private r:Router) { }
  msg:string="";
  check(u:string,p:string)
  {
      var output=this.serObj.checkusernameandpassword(u,p);
      if (output == true) {
        this.r.navigate(['/Dashboard']);
      }
      else {
        this.msg = 'Invalid username or password';
      }
  }

  ngOnInit(): void {
  }

}
