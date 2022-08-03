import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../token.service';

@Injectable({
  providedIn: 'root'
})
export class ReceptionloginService {

  constructor(
    private router: Router,
    private token: TokenService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const reception = this.token.reception(); // return true to access the reception

    if (reception) {
      return true;
    }
    else {
      this.router.navigateByUrl('auth/login');
      return false;
    }
  }
}
