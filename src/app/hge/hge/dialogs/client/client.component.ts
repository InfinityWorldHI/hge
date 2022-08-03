import { Component, Input, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbDialogRef, NbSearchService } from '@nebular/theme';
import { SmartTableData } from '../../../../@core/data/smart-table';

@Component({
  selector: 'ngx-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  @Input() id: string;

  value = "";

  constructor(
    protected ref: NbDialogRef<ClientComponent>) {
  }

  ngOnInit(): void {
  }

}
