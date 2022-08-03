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

  constructor(
    protected ref: NbDialogRef<ClientServiceComponent>) {
  }

  ngOnInit(): void {
  }

}
