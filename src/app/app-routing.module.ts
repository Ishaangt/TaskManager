import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './admin/about/about.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MyProfileComponent } from './admin/my-profile/my-profile.component';
import { ProjectsComponent } from './admin/projects/projects.component';
import { AuthGuard } from './can-active-gaurd.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path:'about', component: AboutComponent},
  {path:'profile', component: MyProfileComponent, canActivate: [AuthGuard]},
  {path:'projects', component: ProjectsComponent, canActivate: [AuthGuard]},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
