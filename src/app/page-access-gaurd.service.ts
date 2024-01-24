import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login.service';
import { JwtHelperService } from '@auth0/angular-jwt'

const USER_KEY = "currentUser";
@Injectable({
  providedIn: 'root'
})
export class PageAccessGaurdService {

  constructor(private loginService: LoginService, private router: Router, private jwtHelperService: JwtHelperService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    var token: string|null = sessionStorage.getItem(USER_KEY);
    var tokenRole: string = this.jwtHelperService.decodeToken(token as string).role;
    var expectedRole: string[] = next.data['expectedRoles'];
    if(expectedRole.length == 0){
      expectedRole = ["ALL"]; // Public Endpoint
      return true; // Approve
    } else if(expectedRole.find((role: string) => role == tokenRole)){   // Assume Authenticated Requests Coming
      return true; // Approve
    } else {
      this.router.navigate(["error"]);
      return false; //Disapprove
    }
  }
}

export const PageAccessGaurd: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(PageAccessGaurdService).canActivate(next, state);
}
