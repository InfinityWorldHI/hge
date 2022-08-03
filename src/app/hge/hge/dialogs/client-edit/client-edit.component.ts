import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss']
})
export class ClientEditComponent implements OnInit {

  @Input() id: string;

  value = "";

  constructor(
    protected ref: NbDialogRef<ClientEditComponent>) {

  }

  ngOnInit(): void {
  }

}
