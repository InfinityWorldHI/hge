import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-employee-add-dialog',
  templateUrl: './employee-add-dialog.component.html',
  styleUrls: ['./employee-add-dialog.component.scss']
})
export class EmployeeAddDialogComponent implements OnInit {

  user: any = {
    image: 'https://i.pravatar.cc/500?img=13',
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

  ) { }

  ngOnInit(): void {
  }

  add(): void {

  }

}
