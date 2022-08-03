import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from '../../../pages/miscellaneous/not-found/not-found.component';
import { FinanceComponent } from './finance/finance.component';
import { AdminLoginService } from '../../auth/auth-services/permissions/admin-login.service';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HrComponent } from './hr/hr.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminLoginService],
    children: [
      //Dashboard
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      //Hr
      {
        path: 'hr',
        component: HrComponent,
      },
      //Hr
      {
        path: 'finance',
        component: FinanceComponent,
      },
      {
        path: '',
        redirectTo: 'hge',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
