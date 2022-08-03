import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FinanceComponent } from './finance/finance.component';
import { HrComponent } from './hr/hr.component';
import { ThemeModule } from '../../../@theme/theme.module';
import { EmployeeComponent } from './employee/employee.component';
import { PaymentsComponent } from './payments/payments.component';
import { CountersComponent } from './counters/counters.component';

@NgModule({
  declarations: [
    HrComponent,
    DashboardComponent,
    FinanceComponent,
    EmployeeComponent,
    PaymentsComponent,
    CountersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ThemeModule,
  ]
})
export class AdminModule { }
