import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user/User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  // public save(user: User) {
  //   console.log("im in service save"+JSON.parse(user.toString()));
  //   return this.http.post<User>(this.usersUrl, JSON.parse(user.toString()));
  // }
  public save(user: User) {
    console.log("im in service save"+user);
    return this.http.post<User>(this.usersUrl, user);
  }
}
