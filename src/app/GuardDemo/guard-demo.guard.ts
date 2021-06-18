import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardDemoGuard implements CanActivate {
  constructor(private r:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean{
      if(sessionStorage.getItem('username')!= null){
        return true;
     }
     else
     {
       this.r.navigate(['/Login']);
       return false;
     }
    
  }
  
}
