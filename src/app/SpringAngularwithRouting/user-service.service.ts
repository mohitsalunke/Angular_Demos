import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../SpringAngularRestCrud/user/User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url:string;

  constructor(private http:HttpClient) {
    this.url='http://localhost:8080/users';
   }

   public findAll()
   {
     return this.http.get<User[]>(this.url);
   }

   public save(user:any)
   {
     return this.http.post<User>(this.url,user);
   }
}
