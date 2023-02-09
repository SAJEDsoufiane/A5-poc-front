import { Component, OnInit } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { SuccessModalComponent } from '../success-modal/success-modal.component';

@Component({
  selector: 'app-userreports',
  templateUrl: './userreports.component.html',
  styleUrls: ['./userreports.component.css']
})
export class UserreportsComponent implements OnInit {

  users: any[];
  user: any;
  userId: number;
  updateDiv=false;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    // fetch the list of users from a service or an API
    this.users = [
      { id: 1, name: 'User 1', email: 'user1@example.com' ,role:"EMPLOYEE",manager:"manager123"},
      { id: 2, name: 'User 2', email: 'user2@example.com',role:"EMPLOYEE",manager:"Manager123" },
      { id: 3, name: 'User 3', email: 'user3@example.com',role:"EMPLOYEE",manager:"manager123" },
    ];
  }

  updateUser(id: number) {
  
    this.updateDiv=true;
    console.log(`Update user with id ${id}`);
    this.userId = id;
    // fetch user information from a service or an API
    this.user =this.users[id-1];
  }
  update(id:number){
    // update user information 

    this.dialog.open(SuccessModalComponent);
  }

  deleteUser(id: number) {
    console.log(`Delete user with id ${id}`);
  }
  cancel(){
    this.updateDiv=false;
  }

}
