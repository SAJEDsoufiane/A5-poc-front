import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }
  public setRoles(roles:string){
    localStorage.setItem("roles",roles);
  }
  public getRoles():string{
    return localStorage.getItem("roles");
  }
  public setToken(jwtToken:string){
    localStorage.setItem("jwtToken",jwtToken);
  }
  public getToken():string {
    return localStorage.getItem('jwtToken');
  }
  public setUsername(username:string){
    localStorage.setItem("username",username);
  }
  public getUsername():string{
    return localStorage.getItem("username");
  }

  public clear(){
    localStorage.clear();
  }

  public isLoggedIn(){
    return this.getRoles()&& this.getToken();
  }

}
