import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './admin/about/about.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MyProfileComponent } from './admin/my-profile/my-profile.component';
import { ProjectsComponent } from './admin/projects/projects.component';
import { AuthGuard } from './can-active-gaurd.service';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { PageAccessGaurd } from './page-access-gaurd.service';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'dashboard', component: DashboardComponent, canActivate: [AuthGuard, PageAccessGaurd], data: {expectedRoles: ["Admin", "Employee"]}},
  {path:'about', component: AboutComponent},  // All Public Roles
  {path:'profile', component: MyProfileComponent, canActivate: [AuthGuard,PageAccessGaurd]}, // All Private Roles
  {path:'projects', component: ProjectsComponent, canActivate: [AuthGuard,PageAccessGaurd], data: {expectedRoles: ["Admin"]}},
  {path:'login', component: LoginComponent}, // All Public Roles
  {path:'register', component: RegisterComponent}, // All Public Roles
  {path:'error', component: ErrorComponent}, // All Public and Private Roles
  {path: '', redirectTo: 'login', pathMatch: 'full' } // Open
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
