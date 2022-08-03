import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../token.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeloginService {

  constructor(
    private router: Router,
    private token: TokenService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const employee = this.token.employee(); // return true to access the employee

    if (employee) {
      return true;
    }
    else {
      this.router.navigateByUrl('auth/login');
      return false;
    }
  }
}
