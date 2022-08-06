import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { ClientTableData } from '../../../@core/data/client-table';
import { ClientSViewComponent } from '../dialogs/client-s-view/client-s-view.component';
import { ClientServiceComponent } from '../dialogs/client-service/client-service.component';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userImage: string;

  constructor(
    private dialogService: NbDialogService
  ) { }

  ngOnInit(): void {
    this.userImage = 'https://i.pravatar.cc/500?img=13';
  }

  showService(id: any): void {
    this.dialogService.open(ClientSViewComponent, {
      context: {
        id: 1,
      },
    });
  }

  newService(): void {
    this.dialogService.open(ClientServiceComponent, {
      context: {
        id: 1,
      },
    });
  }

}
