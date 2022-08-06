import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-employee-view-dialog',
  templateUrl: './employee-view-dialog.component.html',
  styleUrls: ['./employee-view-dialog.component.scss']
})
export class EmployeeViewDialogComponent implements OnInit {

  @Input() id: string;

  user: any = {
    userImage: 'https://i.pravatar.cc/500?img=13',
    fname: 'FirstName',
    lname: 'LastName',
    email: 'email@hge.com',
    phnumber: '012345678912',
    address: 'street, home',
    section: 'HR',
    postion: 'Manger',
    status: 'Active',
    stda: '00/00/0000',
    enda: '00/00/0000',
  };

  constructor(
    protected ref: NbDialogRef<EmployeeViewDialogComponent>,) { }

  ngOnInit(): void {
  }

  close() {
    this.ref.close();
  }
}
