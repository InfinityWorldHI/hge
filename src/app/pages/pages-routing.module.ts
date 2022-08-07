import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { EmployeeloginService } from '../hge/auth/auth-services/permissions/employeelogin.service';
import { ClientloginService } from '../hge/auth/auth-services/permissions/clientlogin.service';
import { ReceptionloginService } from '../hge/auth/auth-services/permissions/receptionlogin.service';
import { PanelComponent } from '../hge/hge/panel/panel.component';
import { ProfileComponent } from '../hge/hge/profile/profile.component';
import { QueueComponent } from '../hge/hge/reception/queue/queue.component';
import { ServicesComponent } from '../hge/hge/services/services.component';
import { ApplicationComponent } from '../hge/hge/application/application.component';
import { ClientsComponent } from '../hge/hge/clients/clients.component';
import { AdminLoginService } from '../hge/auth/auth-services/permissions/admin-login.service';
import { DashboardComponent } from '../hge/hge/admin/dashboard/dashboard.component';
import { FinanceComponent } from '../hge/hge/admin/finance/finance.component';
import { HrComponent } from '../hge/hge/admin/hr/hr.component';
import { NotAuthorizedComponent } from './miscellaneous/not-authorized/not-authorized.component';
import { EmployeeComponent } from '../hge/hge/admin/employee/employee.component';
import { PaymentsComponent } from '../hge/hge/admin/payments/payments.component';
import { CountersComponent } from '../hge/hge/admin/counters/counters.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      //Employee
      {
        path: 'panel',
        component: PanelComponent,
        canActivate: [EmployeeloginService]
      },
      {
        path: 'clients',
        component: ClientsComponent,
        canActivate: [EmployeeloginService]
      },
      //Reception
      {
        path: 'queue',
        component: QueueComponent,
        canActivate: [ReceptionloginService]
      },
      //Client
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [ClientloginService]
      },
      {
        path: 'application',
        component: ApplicationComponent,
        canActivate: [ClientloginService]
      },
      {
        path: 'services',
        component: ServicesComponent,
        canActivate: [ClientloginService]
      },
      //Admin
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'employee',
        component: EmployeeComponent,
      },
      //Hr
      {
        path: 'hr',
        component: HrComponent,
      },
      //finance
      {
        path: 'finance',
        component: FinanceComponent,
      },
      //Payments
      {
        path: 'payments',
        component: PaymentsComponent,
      },
      //Counters
      {
        path: 'counters',
        component: CountersComponent,
      },
      {
        path: 'not authorized',
        component: NotAuthorizedComponent,
      },
      {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
