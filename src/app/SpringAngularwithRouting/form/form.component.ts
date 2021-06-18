import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from 'src/app/SpringAngularRestCrud/user/User';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user: User;
  
  constructor(private serObj:UserServiceService,private activate:ActivatedRoute,private r:Router) { 
    this.user=new User();
  }

  onSubmit()
  {
    this.serObj.save(this.user).subscribe((result:any) =>this.gotoUserList);
  }

  gotoUserList() {
    this.r.navigate(['/users']);
  }

  ngOnInit(): void {
  }

}
