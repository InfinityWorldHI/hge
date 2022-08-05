import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-employee-add-dialog',
  templateUrl: './employee-add-dialog.component.html',
  styleUrls: ['./employee-add-dialog.component.scss']
})
export class EmployeeAddDialogComponent implements OnInit {

  userRole: number = 0;

  constructor(

  ) { }

  ngOnInit(): void {
  }

}
