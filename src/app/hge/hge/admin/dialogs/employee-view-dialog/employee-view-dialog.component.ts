import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-employee-view-dialog',
  templateUrl: './employee-view-dialog.component.html',
  styleUrls: ['./employee-view-dialog.component.scss']
})
export class EmployeeViewDialogComponent implements OnInit {

  @Input() id: string;

  constructor() { }

  ngOnInit(): void {
  }

}
