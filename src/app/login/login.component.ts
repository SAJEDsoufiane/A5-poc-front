import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService,private userAuthService:UserAuthService,private router:Router) { }

  ngOnInit(): void {
  }
login(loginForm){
  this.userService.login(loginForm.value).subscribe(
    (response:any)=>{
console.log(response.jwtToken);
console.log(response.user.role);

this.userAuthService.setRoles(response.user.role.label);
this.userAuthService.setToken(response.jwtToken);
this.userAuthService.setUsername(response.user.userName)

const role = response.user.role.label;

if(role=="admin"){
  this.router.navigate(['/admin']);
}
else if(role=="manager"){
  this.router.navigate(['/manager']);
}
else {
  this.router.navigate(['/user']);
}

    },
    (error)=>{
      console.log(error)
      //add error message here
    }
  )

}
}
