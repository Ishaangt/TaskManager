import { inject, Injectable } from '@angular/core';
import { CanActivateFn, RouterStateSnapshot, ActivatedRouteSnapshot, Router} from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class CanActiveGaurdService{

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
    if(this.loginService.isAuthenticated()){  
      return true; // User approved for routing
    } else {
      this.router.navigate(["login"]);
      return false; // User denied routing
    } 
  }


}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(CanActiveGaurdService).canActivate(next, state);
}