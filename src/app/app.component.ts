import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'TaskManager';
  currentUser: string = "";
  constructor(public loginService : LoginService, private router: Router){
   sessionStorage.clear();
  }

  onLogoutClick(event: any){
    this.loginService.Logout();
    this.router.navigate(["login"]);
  }
}
