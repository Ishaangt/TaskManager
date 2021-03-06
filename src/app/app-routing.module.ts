import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AboutComponent } from './admin/about/about.component';
import { HomeComponent } from './admin/home/home.component';
import { ProjectsComponent } from './admin/projects/projects.component';


const routes: Routes = [
  {path:"dashboard", component: DashboardComponent},
  {path:"about", component: AboutComponent},
  {path:"home", component: HomeComponent},
  {path:"projects", component: ProjectsComponent},
  {path:"", redirectTo:"home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
