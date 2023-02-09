import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuccessModalComponent } from '../success-modal/success-modal.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users: any[];
  user: any;
  userId: number;
  updateDiv = false;

  constructor(private dialog: MatDialog, private http: HttpClient) { }

  ngOnInit() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })
    };
    // fetch the list of users from a service or an API
    /* this.users = [
       { id: 1, name: 'User 1', firstname: 'user',lastname: 'user' ,role:"EMPLOYEE",manager:"User 2"},
       { id: 2, name: 'User 2', firstname: 'user',lastname:"user",role:"EMPLOYEE",manager:"None" },
       { id: 3, name: 'User 3', firstname: 'user',lastname:"user",role:"EMPLOYEE",manager:"User 2" },
       { id: 3, name: 'User 3', firstname: 'user',lastname:"user",role:"ADMIN",manager:"User 2" },
       { id: 3, name: 'User 3', firstname: 'user',lastname:"user",role:"MANAGER",manager:"User 2" },
       { id: 3, name: 'User 3', firstname: 'user',lastname:"user",role:"EMPLOYEE",manager:"User 2" },
       { id: 3, name: 'User 3', firstname: 'user',lastname:"user",role:"EMPLOYEE",manager:"User 2" },
     ];*/
    this.http.get<any[]>('http://localhost:9090/api/user/users', httpOptions)
      .subscribe(data => {
        this.users = data;
        console.log(this.users)
      });
  }

  updateUser(id: number) {

    this.updateDiv = true;
    console.log(`Update user with id ${id}`);
    this.userId = id;
    // fetch user information from a service or an API
    this.user = this.users.find(user => user.id === id);
    console.log(this.user.manager)
    if (this.user.manager == null) {
      this.user.manager = { userName: "None" };
      console.log(this.user.manager.userName + "when None");
    }
  }
  update(id: number) {
    // update user information 
    console.log(this.user.firstname)
    //getting the role id 
    var idRole = 1;
    if (this.user.role.label == "admin") {
      idRole = 1;
    }

    if (this.user.role.label == "manager") {
      idRole = 2;
    }
    if (this.user.role.label == "user") {
      idRole = 3;
    }



    if (this.user.manager.userName == "None") {
      this.user = {
        id: id,
        firstname: this.user.firstname,
        lastname: this.user.lastname,
        manager: null,
        role: {
          id:idRole,
          label: this.user.role.label
        },
        username: this.user.userName
      };
    }
    else {
      this.user = {
        id: id,
        firstname: this.user.firstname,
        lastname: this.user.lastname,
        manager: {
          username : this.user.manager.userName
        },
        role: {
          id:idRole,
          label: this.user.role.label
        },
        username: this.user.userName
      };

    }
    console.log(this.user.username+" New User");


   /* const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    this.http.post('http://localhost:9090/api/user/edit', this.user, { headers }).subscribe(res => {
      console.log(res);
      this.dialog.open(SuccessModalComponent);
    });
*/
  }

  deleteUser(id: number) {
    console.log(`Delete user with id ${id}`);
  }
  cancel() {
    this.updateDiv = false;
  }
}
