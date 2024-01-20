import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginViewModel } from '../login-view-model';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginViewModel: LoginViewModel = new LoginViewModel();
  loginError: string = "";

  constructor(private loginService: LoginService, private router: Router){}

  ngOnInit(): void {
      
  }

  onLoginClick(event: any){
    this.loginService.Login(this.loginViewModel).subscribe({
      next: (response: any) => {
        this.router.navigateByUrl("/dashboard");
      }, 
      error: (error: any) => {
        this.loginError = error.error.message;
      }
    })
  }

  onLogoutClick(event: any){
    this.loginService.Logout();
  }
}
