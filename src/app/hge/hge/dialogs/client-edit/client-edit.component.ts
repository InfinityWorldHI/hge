import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss']
})
export class ClientEditComponent implements OnInit {

  @Input() id: string;

  client = {
    image: '',
    fname: '',
    lname: '',
    email: '',
    phnumber: '',
    whatsapp: '',
    address: '',
    rescountry: '',
    rescity: '',
    street: '',
    streetno: '',
    iban: '',
    status: '',
  };

  constructor(
    protected ref: NbDialogRef<ClientEditComponent>) {

  }

  ngOnInit(): void {
  }

  edit(): void {

  }

}
