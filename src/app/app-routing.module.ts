import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddprojectComponent } from './addproject/addproject.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AdminComponent } from './admin/admin.component';
import { ForbidenComponent } from './forbiden/forbiden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { UserComponent } from './user/user.component';
import { UserreportsComponent } from './userreports/userreports.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminComponent,canActivate:[AuthGuard],data:{roles:['admin']}},
  {path:'manager',component:ManagerComponent,canActivate:[AuthGuard],data:{roles:['manager']}},
  {path:'user',component:UserComponent,canActivate:[AuthGuard],data:{roles:['user']}},
  {path:'login',component:LoginComponent},
  {path:'userreport',component:UserreportsComponent},
  {path:'forbiden',component:ForbidenComponent},
  {path:'adduser',component:AdduserComponent},
  {path:'addproject',component:AddprojectComponent},
  {path:'projects',component:ProjectlistComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
