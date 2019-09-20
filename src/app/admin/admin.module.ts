import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { DashboardService } from './services/dashboard.service';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsService } from './services/projects.service';



@NgModule({
  declarations: [
    DashboardComponent,
    AboutComponent,
    HomeComponent,
    MyProfileComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    DashboardComponent,
    HomeComponent,
    MyProfileComponent,
    ProjectsComponent,
    AboutComponent
  ],
  providers: [
    DashboardService,
    ProjectsService
  ]
})
export class AdminModule { }
