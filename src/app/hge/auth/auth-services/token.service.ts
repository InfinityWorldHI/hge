import { Injectable } from '@angular/core';
import { PagesService } from '../../../pages/pages.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  userInfo: any;
  baseURL: string;

  constructor(
    private pagesservice : PagesService
  ) {
    this.baseURL = this.pagesservice.baseURL;
  }

  tokenHandler(token: any) {
    this.setToken(token);
  }

  setToken(token: any) {
    localStorage.setItem('token', token);
  }

  setUser(user: any) {
    localStorage.setItem('user', user);
  }

  removeToken() {
    localStorage.removeItem('token');
  }

  user(){
    return localStorage.getItem('user');
  }

  loggedIn() {
    return this.isValid();
  }

  admin() {
    return this.isAdmin();
  }

  client() {
    return this.isClient();
  }

  reception() {
    return this.isReception();
  }

  employee() {
    return this.isEmployee();
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isValid() {
    const token = this.getToken();
    if (token) {
      const payload = this.getPayload(token);
      if (payload) {
        // return (payload.iss === this.baseURL) ? true : false;
        return true;
      }
    }
    return false;
  }

  isClient() {
    const user = JSON.parse(this.user());
    if (user.role == 1) {
      return true;
    }
    return false;
  }

  isReception() {
    const user = JSON.parse(this.user());
    if (user.role == 2) {
      return true;
    }
    return false;
  }

  isEmployee() {
    const user = JSON.parse(this.user());
    if (user.role == 3) {
      return true;
    }
    return false;
  }

  isAdmin() {
    const user = JSON.parse(this.user());
    if (user.role == 4) {
      return true;
    }
    return false;
  }

  getPayload(token: any) {
    const payload = token.split('.')[1];

    // return JSON.parse(atob(payload));
    return "atob(payload)";
  }
}
