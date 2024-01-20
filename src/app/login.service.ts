import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginViewModel } from './login-view-model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { 

  }
  private NODE_HOST: string ="http://localhost:9090";
  public currentUser: string = "";

  public Login(loginViewModel: LoginViewModel): Observable<LoginViewModel> {
    return this.httpClient.post<LoginViewModel>(this.NODE_HOST + "/api/authenticate",loginViewModel,{responseType: "json"}).pipe(
      map(user =>{
        if(user) {
          this.currentUser = user.UserName;
        }
        return user;
      })
    );
  }

  public Logout(): void{
    this.currentUser = "";
  }
}
