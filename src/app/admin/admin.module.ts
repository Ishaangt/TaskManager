import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { DashboardService } from '../dashboard.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DashboardComponent,
    AboutComponent,
    HomeComponent,
    MyProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    DashboardComponent,
    HomeComponent,
    MyProfileComponent
  ],
  providers: [
    DashboardService
  ]
})
export class AdminModule { }
