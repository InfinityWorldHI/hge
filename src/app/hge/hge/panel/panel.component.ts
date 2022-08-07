import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbSearchService, NbWindowService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { SendMailComponent } from '../../components/send-mail/send-mail.component';
import { ClientEditComponent } from '../dialogs/client-edit/client-edit.component';
import { ClientSViewComponent } from '../dialogs/client-s-view/client-s-view.component';
import { ClientViewComponent } from '../dialogs/client-view/client-view.component';
import { ClientComponent } from '../dialogs/client/client.component';

@Component({
  selector: 'ngx-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  constructor(
    private dialogService: NbDialogService,
    private service: SmartTableData,
    private searchService: NbSearchService,
    private windowService: NbWindowService,
    ) {
    this.searchService.onSearchSubmit()
      .subscribe((data: any) => {
      this.value = data.term;
    })
  }

    value = "";

  ngOnInit(): void {
  }

  showClient(id: any): void {
    this.dialogService.open(ClientViewComponent, {
      context: {
        id: id,
      },
      hasScroll: true,
    });
  }

  editClient(id: any): void {
    this.dialogService.open(ClientEditComponent, {
      context: {
        id: id,
      },
      hasScroll: true,
    });
  }

  newClient(): void {
    this.dialogService.open(ClientComponent, {
      context: {
        id: "1",
      },
      hasScroll: true,
    });
  }

  emailClient(id: any): void {
    this.windowService.open(SendMailComponent, { title: `Send Email` });
  }

  serviceClient(id: any): void {
    this.dialogService.open(ClientSViewComponent, {
      context: {
        id: id,
      },
      hasScroll: true,
    });
  }

}
