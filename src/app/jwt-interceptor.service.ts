import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const USER_KEY: string = "currentUser";
const XSRF_KEY: string = "XSRFRequestToken";
const XSRF_SERVER_KEY: string = "XSRF-REQUEST-TOKEN";
@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    // var headers: HttpHeaders = new HttpHeaders();
    // headers.set("Authorization", "Bearer ");
    var token: any = "";
    if(sessionStorage.getItem(USER_KEY) != null){
      var _XSRF_TOKEN: string|null = sessionStorage.getItem(XSRF_KEY);
      if(_XSRF_TOKEN != null){
        var headers = new HttpHeaders().set("Authorization", "Bearer " + sessionStorage.getItem(USER_KEY)).append("Content-Type","application/json").append(XSRF_SERVER_KEY, _XSRF_TOKEN);
        req = req.clone({headers: headers});
      }
    }
    return next.handle(req);
  }
}
