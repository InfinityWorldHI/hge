import { Injectable } from '@angular/core';
import { ClientTableData } from '../data/client-table';

@Injectable()
export class ClientTableService extends ClientTableData {

  data = [{
    id: 1,
    firstName: 'Service 1',
    lastName: '20/04/2022',
    username: 'In progress',
  },{
    id: 2,
    firstName: 'Service 2',
    lastName: '22/04/2022',
    username: 'Done',
  },  ];

  getData() {
    return this.data;
  }
}
