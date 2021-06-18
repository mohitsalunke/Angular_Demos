import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/SpringAngularRestCrud/user-service.service';
import { User } from './User';

@Component({
  
  templateUrl: './user-service.component.html',
  styleUrls: ['./user-service.component.css']
})
export class UserServiceComponent implements OnInit {
  users:User[]=[];
  constructor(private serObj:UserServiceService) { }

  ngOnInit(): void {
    this.serObj.findAll().subscribe(data =>{this.users=data});
  }

}
