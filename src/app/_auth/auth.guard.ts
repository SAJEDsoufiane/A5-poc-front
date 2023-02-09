import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userAuthService:UserAuthService,private router:Router,private userService:UserService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.userAuthService.getToken()!=null){
        const role = route.data["roles"] as Array<string>;
        if(role){
          console.log(role[0]+"test");
          const match = this.userService.roleMatch(role[0]);
          console.log(role+" "+match);
          if(match){
            return true;
          }
          else {
            this.router.navigate(['/forbiden']);
            return false;
          }
        }
      }
      this.router.navigate(['/login']);
      return false;
      
    }
  
}
