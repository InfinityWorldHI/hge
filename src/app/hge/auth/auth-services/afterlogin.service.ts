import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AfterloginService implements CanActivate {

  constructor(
    private router: Router,
    private token: TokenService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const logged = this.token.loggedIn(); // return true to access the root

    if (logged) {
      return true;
    }
    else {
      this.router.navigateByUrl('auth/login');
      return false;
    }
  }
}
