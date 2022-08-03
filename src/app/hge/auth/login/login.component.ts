import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrConfig, NbToastrService } from '@nebular/theme';
import { PagesService } from '../../../pages/pages.service';
import { AuthService } from '../auth-services/auth.service';
import { TokenService } from '../auth-services/token.service';


@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted: boolean;

  loading: boolean = false;
  hide: boolean = true;

  emailError: string;
  passwordError: string;

  email = "";
  password = "";

  config: NbToastrConfig;

  index = 1;
  destroyByClick = true;
  duration = 2000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  status: NbComponentStatus = 'primary';

  title = '';
  content = '';

  types: NbComponentStatus[] = [
    'primary',
    'success',
    'info',
    'warning',
    'danger',
  ];

  constructor(
    private toastrService: NbToastrService,
    private pagesservice : PagesService,
    private token: TokenService,
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  login(): void {
      this.loading = true;
      var data = {
        'email': this.email,
        'password': this.password
      };
      let res = this.pagesservice.userLogin(data);
      console.log(res);
      if (res) {
        // this.showToast('success', 'Success', 'You logged in');
        this.handleResponse(res);
      } else {
        // this.showToast('danger', 'Error', 'E-mail or password Incorrect!');
      }
      // this.pagesservice.userLogin(data).subscribe(
      //   data => {
      //     this.handleResponse(data);
      //   },
      //   error => {
      //     // console.log(error);
      //     this.showToast('danger', 'Error', 'E-mail or password Incorrect!');
      //     this.loading = false;
      //   });
  }

  handleResponse(token: any): void {
    this.token.tokenHandler(token.access_token);
    if (this.token.loggedIn()) {
      this.token.setUser(JSON.stringify(token.user));
      this.auth.setUserInfo(JSON.stringify(token.user));
      this.auth.changeAuthStatus(true);
      this.loading = false;

      if (this.token.client()) {
        console.log('redirect to profile');
        this.router.navigateByUrl('hge/profile');
      } else if (this.token.employee()) {
        console.log('redirect to panel');
        this.router.navigateByUrl('hge/panel');
      } else if (this.token.reception()) {
        console.log('redirect to queue');
        this.router.navigateByUrl('hge/queue');
      } else if (this.token.admin()) {
        console.log('redirect to admin');
        this.router.navigateByUrl('admin');
      } else {
        console.log('redirect to hge');
        this.router.navigateByUrl('hge');
      }

    }
  }

  private showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };
    const titleContent = title ? `. ${title}` : '';

    this.index += 1;
    this.toastrService.show(
      body,
      `Toast ${this.index}${titleContent}`,
      config);
  }

}
