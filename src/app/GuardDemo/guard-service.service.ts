import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardServiceService {

  constructor() { }

  checkusernameandpassword(uname: string, pwd: string) {
    if (uname == "mohit" && pwd == "mohit@123") {
      sessionStorage.setItem('username', "mohit");
      return true;
    }
    else {
      return false;
    }
  }
}
