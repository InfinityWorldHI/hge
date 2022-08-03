import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbSearchService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
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
    ) {
      const data = this.service.getData();
    this.source.load(data);

    this.searchService.onSearchSubmit()
      .subscribe((data: any) => {
      this.value = data.term;
    })
  }


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
          title: 'First Name',
          type: 'string',
        },
        lastName: {
          title: 'Last Name',
          type: 'string',
        },
        username: {
          title: 'Username',
          type: 'string',
        },
        email: {
          title: 'E-mail',
          type: 'string',
        },
        age: {
          title: 'Age',
          type: 'number',
        },
      },
    };

    source: LocalDataSource = new LocalDataSource();

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

  serviceClient(id: any): void {
    this.dialogService.open(ClientSViewComponent, {
      context: {
        id: id,
      },
      hasScroll: true,
    });
  }

}
