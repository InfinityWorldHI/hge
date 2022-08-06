import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef, NbSearchService } from '@nebular/theme';

@Component({
  selector: 'ngx-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

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
    protected ref: NbDialogRef<ClientComponent>) {
  }

  ngOnInit(): void {
  }

  add(): void {

  }

}
