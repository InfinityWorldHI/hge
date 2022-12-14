import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import {
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
  NbSpinnerModule,
} from '@nebular/theme';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'
import { ThemeModule } from '../../@theme/theme.module';
import { LoaderComponent } from '../components/loader/loader.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    AuthRoutingModule,
    ThemeModule,
    NbSpinnerModule,
    NbAuthModule,
  ]
})
export class AuthModule { }
