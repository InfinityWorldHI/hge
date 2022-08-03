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

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      firstName: {
        title: 'Service',
        type: 'string',
      },
      lastName: {
        title: 'Date',
        type: 'string',
      },
      username: {
        title: 'Status',
        type: 'string',
      },
    }
  };

  data = [{
    id: 1,
    firstName: 'Service 1',
    lastName: '20/04/2022',
    username: 'In progress',
  }, {
    id: 2,
    firstName: 'Service 2',
    lastName: '22/04/2022',
    username: 'Done',
  },];

  source: LocalDataSource = new LocalDataSource();

  constructor(
    private dialogService: NbDialogService
  ) {
    this.source.load(this.data);
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

  newService(): void {
    this.dialogService.open(ClientServiceComponent, {
      context: {
        id: 1,
      },
    });
  }

}
