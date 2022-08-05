import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-employee-edit-dialog',
  templateUrl: './employee-edit-dialog.component.html',
  styleUrls: ['./employee-edit-dialog.component.scss']
})
export class EmployeeEditDialogComponent implements OnInit {

  //Usere ID for editing his info
  @Input() id: string;

  userRole: number = 0;

  userImage: string;

  constructor() { }

  ngOnInit(): void {
    this.userImage = 'https://i.pravatar.cc/500?img=13';
  }

}
