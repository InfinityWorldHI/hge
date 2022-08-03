import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(this.token.loggedIn());
  authStatus = this.loggedIn.asObservable();

  private userInfo = new BehaviorSubject<any>(this.token.user());
  user = this.userInfo.asObservable();

  setUserInfo(user: any){
    this.userInfo.next(user);
  }

  changeAuthStatus(value: boolean) {
    this.loggedIn.next(value);
  }

  constructor(
    private token: TokenService
  ) { }
}
