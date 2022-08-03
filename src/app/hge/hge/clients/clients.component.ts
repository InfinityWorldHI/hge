import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ClientComponent } from '../dialogs/client/client.component';
import { ClientViewComponent } from '../dialogs/client-view/client-view.component';

@Component({
  selector: 'ngx-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  constructor(
    private dialogService: NbDialogService
  ) {
  }

  ngOnInit(): void {
  }

  showClient(id: any): void {
    this.dialogService.open(ClientViewComponent, {
      context: {
        id: id,
      },
    });
  }

  newClient(): void {
    this.dialogService.open(ClientComponent, {
      context: {
        id: "1",
      },
    });
  }

}
