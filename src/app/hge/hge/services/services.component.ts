import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ClientServiceComponent } from '../dialogs/client-service/client-service.component';

@Component({
  selector: 'ngx-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(
    private dialogService: NbDialogService,
  ) { }

  ngOnInit(): void {
  }

  startService(id: any): void {
    this.dialogService.open(ClientServiceComponent, {
      context: {
        id: id,
      },
    });
  }

}
