import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
   NbActionsModule,
   NbAlertModule,
   NbButtonModule,
   NbCardModule,
   NbCheckboxModule,
   NbDatepickerModule,
   NbIconModule,
   NbInputModule,
   NbMenuModule,
   NbRadioModule,
   NbSearchModule,
   NbSelectModule,
   NbUserModule,
   NbDialogModule,
   NbPopoverModule,
   NbTabsetModule,
   NbTooltipModule,
   NbWindowModule,
   NbAccordionModule,
   NbListModule,
   NbRouteTabsetModule,
   NbStepperModule,
   } from '@nebular/theme';

import { FormsModule as ngFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { HgeComponent } from './hge.component';
import { RouterModule } from '@angular/router';
import { ThemeModule } from '../../@theme/theme.module';
import { QueueComponent } from './reception/queue/queue.component';
import { PanelComponent } from './panel/panel.component';
import { ClientComponent } from './dialogs/client/client.component';
import { ProfileComponent } from './profile/profile.component';
import { ClientServiceComponent } from './dialogs/client-service/client-service.component';
import { ClientSViewComponent } from './dialogs/client-s-view/client-s-view.component';
import { ServicesComponent } from './services/services.component';
import { ApplicationComponent } from './application/application.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientViewComponent } from './dialogs/client-view/client-view.component';
import { ClientEditComponent } from './dialogs/client-edit/client-edit.component';
// import { AdminRoutingModule } from './admin/admin-routing.module';
// import { AdminModule } from './admin/admin.module';

import { CountersComponent } from './admin/counters/counters.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { EmployeeComponent } from './admin/employee/employee.component';
import { FinanceComponent } from './admin/finance/finance.component';
import { HrComponent } from './admin/hr/hr.component';
import { PaymentsComponent } from './admin/payments/payments.component';
import { CounterEditDialogComponent } from './admin/dialogs/counter-edit-dialog/counter-edit-dialog.component';
import { CounterAddDialogComponent } from './admin/dialogs/counter-add-dialog/counter-add-dialog.component';
import { EmployeeEditDialogComponent } from './admin/dialogs/employee-edit-dialog/employee-edit-dialog.component';
import { EmployeeAddDialogComponent } from './admin/dialogs/employee-add-dialog/employee-add-dialog.component';
import { EmployeeViewDialogComponent } from './admin/dialogs/employee-view-dialog/employee-view-dialog.component';
import { ImageUploadComponent } from '../components/image-upload/image-upload.component';
import { LoaderComponent } from '../components/loader/loader.component';
import { LoaderDotsComponent } from '../components/loader-dots/loader-dots.component';
import { SendMailComponent } from '../components/send-mail/send-mail.component';
import { TicketComponent } from '../components/ticket/ticket.component';

@NgModule({
  declarations: [
    HgeComponent,
    QueueComponent,
    PanelComponent,
    ClientComponent,
    ProfileComponent,
    ClientServiceComponent,
    ClientSViewComponent,
    ServicesComponent,
    ApplicationComponent,
    ClientsComponent,
    ClientViewComponent,
    ClientEditComponent,
    HrComponent,
    DashboardComponent,
    FinanceComponent,
    EmployeeComponent,
    PaymentsComponent,
    CountersComponent,
    CounterAddDialogComponent,
    CounterEditDialogComponent,
    EmployeeViewDialogComponent,
    EmployeeAddDialogComponent,
    EmployeeEditDialogComponent,
    ImageUploadComponent,
    LoaderDotsComponent,
    SendMailComponent,
    TicketComponent,
    // LoaderComponent,
  ],
  exports: [
    // LoaderComponent,
  ],
  imports: [
    CommonModule,
    ThemeModule,
    NbMenuModule,
    RouterModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    Ng2SmartTableModule,
    NbSearchModule,
    NbAlertModule,
    NbDialogModule,
    NbPopoverModule,
    NbTabsetModule,
    NbTooltipModule,
    NbWindowModule,
    NbAccordionModule,
    NbListModule,
    NbRouteTabsetModule,
    NbStepperModule,
    FormsModule,
    ReactiveFormsModule,
    // AdminRoutingModule,
    // AdminModule,
  ]
})
export class HgeModule { }
