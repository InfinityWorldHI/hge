import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';

import { AfterloginService } from './hge/auth/auth-services/afterlogin.service';
import { AdminLoginService } from './hge/auth/auth-services/permissions/admin-login.service';

export const routes: Routes = [
  {
    path: 'hge',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
    canActivate: [AfterloginService]
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/pages.module')
    .then(m => m.PagesModule),
    canActivate: [AdminLoginService],
  },
  {
    path: 'auth',
    loadChildren: () => import('./hge/auth/auth.module')
      .then(m => m.AuthModule),
  },
  { path: '', redirectTo: 'hge', pathMatch: 'full' },
  { path: '**', redirectTo: 'hge' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
