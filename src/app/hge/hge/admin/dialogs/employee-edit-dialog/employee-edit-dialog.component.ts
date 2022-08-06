import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-employee-edit-dialog',
  templateUrl: './employee-edit-dialog.component.html',
  styleUrls: ['./employee-edit-dialog.component.scss']
})
export class EmployeeEditDialogComponent implements OnInit {

  //Usere ID for editing his info
  @Input() id: string;

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

  constructor() { }

  ngOnInit(): void {
  }

  edit(): void {

  }

}
