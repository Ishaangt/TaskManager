import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginViewModel } from './login-view-model';
import { map, Observable } from 'rxjs';
import { UserLogin } from './user-login';
import { JwtHelperService } from '@auth0/angular-jwt';

const NODE_HOST: string = "http://localhost:9090";
const USER_KEY: string = "currentUser";
const XSRF_KEY: string = "XSRFRequestToken";
const XSRF_SERVER_KEY: string = "XSRF-REQUEST-TOKEN";
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private httpClient: HttpClient| null = null; 
  constructor(private httpBackend: HttpBackend, private jwtHelperService: JwtHelperService) { }
  
  public currentUser: string = "";

  public Login(loginViewModel: LoginViewModel): Observable<UserLogin|null> {
    this.httpClient = new HttpClient(this.httpBackend);
    return this.httpClient.post<UserLogin>(NODE_HOST + "/api/authenticate",loginViewModel,{responseType: "json", observe: "response"}).pipe(
      map(response =>{
        if(response) {
          this.currentUser = response.body!.userName;
          sessionStorage.setItem(USER_KEY, response.body!.token);
          if(response.headers.get(XSRF_SERVER_KEY) == null){
            throw new Error('XSRF Token not Found');
          } else {
            var XSRF: any = response.headers.get(XSRF_SERVER_KEY) as string;
            sessionStorage.setItem(XSRF_KEY, XSRF);
            
          }
          
        }
        return response.body;
      })
    );
  }

  public Logout(): void{
    sessionStorage.removeItem(USER_KEY);
    this.currentUser = "";
  }

  /**
     * @description
     * If jwtHelperService.isTokenExpired == True -> Expired Token
     * If jwtHelperService.isTokenExpired == False -> Expired Token
     */
  public isAuthenticated(): boolean {
    var token = sessionStorage.getItem(USER_KEY);
    if (token != null && this.jwtHelperService.isTokenExpired(token)) {
      return false; // Expired Token -> Disapprove next state
    } else if (token == null){
      return false; // Token not available -> Disapprove next state
    } else {
      return true; // Active Token -> Approve next state
    }
  }

}
