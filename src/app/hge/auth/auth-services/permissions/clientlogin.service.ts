import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../token.service';

@Injectable({
  providedIn: 'root'
})
export class ClientloginService {

  constructor(
    private router: Router,
    private token: TokenService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const client = this.token.client(); // return true to access the client

    if (client) {
      return true;
    }
    else {
      this.router.navigateByUrl('auth/login');
      return false;
    }
  }
}
