import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    // var headers: HttpHeaders = new HttpHeaders();
    // headers.set("Authorization", "Bearer ");
    var token: any = "";
    if(sessionStorage.getItem('currentUser') != null){
      var headers = new HttpHeaders().set("Authorization", "Bearer " + sessionStorage.getItem('currentUser')).append("Content-Type","application/json");
      req = req.clone({headers: headers});
    }
    return next.handle(req);
  }
}
