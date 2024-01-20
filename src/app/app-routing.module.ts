import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './admin/about/about.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MyProfileComponent } from './admin/my-profile/my-profile.component';
import { ProjectsComponent } from './admin/projects/projects.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'dashboard', component: DashboardComponent},
  {path:'about', component: AboutComponent},
  {path:'profile', component: MyProfileComponent},
  {path:'projects', component: ProjectsComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: LoginComponent}, // Create the register Component
  {path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
