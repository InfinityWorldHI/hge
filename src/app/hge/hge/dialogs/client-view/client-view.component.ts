import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { SmartTableData } from '../../../../@core/data/smart-table';
import { ClientServiceComponent } from '../client-service/client-service.component';

@Component({
  selector: 'ngx-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.scss']
})
export class ClientViewComponent implements OnInit {

  @Input() id: string;

  value = "";

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
    protected ref: NbDialogRef<ClientServiceComponent>) {
  }

  ngOnInit(): void {
  }

  close() {
    this.ref.close();
  }

}
