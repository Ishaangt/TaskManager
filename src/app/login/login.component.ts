import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginViewModel } from '../login-view-model';
import { LoginService } from '../login.service';

const USER_KEY: string = "currentUser";
const XSRF_KEY: string = "XSRFRequestToken";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginViewModel: LoginViewModel = new LoginViewModel();
  loginError: string = "";

  constructor(private loginService: LoginService, private router: Router){

  }

  ngOnInit(): void {
    
  }

  onLoginClick(event: any){
    this.loginService.Login(this.loginViewModel).subscribe({
      next: (response: any) => {
        if(this.loginService.currentUser == "" && sessionStorage.getItem(USER_KEY) == "" && sessionStorage.getItem(XSRF_KEY) == ""){
          this.router.navigate(["error"]);
          console.log("Incorrect Login Data Received");
          this.loginService.Logout();
        } else {
          this.router.navigate(["dashboard"]);
        }
      }, 
      error: (error: any) => {
        this.loginError = error.error.message;
      }
    })
  }
  
}
