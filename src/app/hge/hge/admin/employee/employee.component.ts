import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { EmployeeAddDialogComponent } from '../dialogs/employee-add-dialog/employee-add-dialog.component';
import { EmployeeEditDialogComponent } from '../dialogs/employee-edit-dialog/employee-edit-dialog.component';
import { EmployeeViewDialogComponent } from '../dialogs/employee-view-dialog/employee-view-dialog.component';

@Component({
  selector: 'ngx-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(
    private dialogService: NbDialogService,
  ) { }

  ngOnInit(): void {
  }

  showEmployee(id: any): void {
    this.dialogService.open(EmployeeViewDialogComponent, {
      context: {
        id: id,
      },
      hasScroll: true,
    });
  }

  editEmployee(id: any): void {
    this.dialogService.open(EmployeeEditDialogComponent, {
      context: {
        id: id,
      },
      hasScroll: true,
    });
  }

  newEmployee(): void {
    this.dialogService.open(EmployeeAddDialogComponent, {
      hasScroll: true,
    });
  }
}
