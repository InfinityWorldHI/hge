import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ClientSViewComponent } from '../dialogs/client-s-view/client-s-view.component';

@Component({
  selector: 'ngx-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  constructor(
    private dialogService: NbDialogService
  ) {
  }

  ngOnInit(): void {
  }

  showService(id: any): void {
    this.dialogService.open(ClientSViewComponent, {
      context: {
        id: 1,
      },
    });
  }

}
