import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-client-s-view',
  templateUrl: './client-s-view.component.html',
  styleUrls: ['./client-s-view.component.scss']
})
export class ClientSViewComponent implements OnInit {

  @Input() id: number;

  constructor(
    protected ref: NbDialogRef<ClientSViewComponent>) { }

  ngOnInit(): void {
  }

  dismiss() {
    this.ref.close();
  }

}
