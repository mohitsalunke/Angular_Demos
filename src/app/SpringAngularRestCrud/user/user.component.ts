import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from './User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserServiceService]
})
export class UserComponent implements OnInit{

  users: User[]=[];
  User={

    id:"",
    name:"",
    email:""


  }
  

  constructor(private userService: UserServiceService) {
   
  }

  onSubmit(userdata:any){

    console.log("im in component" +userdata);

    this.userService.save(userdata);
    
    
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });

    console.log(this.users);
  }

}
