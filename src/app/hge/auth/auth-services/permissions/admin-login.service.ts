import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../token.service';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(
    private router: Router,
    private token: TokenService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const admin = this.token.admin(); // return true to access the admin

    if (admin) {
      return true;
    }
    else {
      this.router.navigateByUrl('auth/login');
      return false;
    }
  }
}
