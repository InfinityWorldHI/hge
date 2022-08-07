import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { TicketComponent } from '../../../components/ticket/ticket.component';

@Component({
  selector: 'ngx-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnInit {

  service: string;

  counters = [{
    name: 'No.1',
    status: true,
    ticket: 25,
  },{
    name: 'No.2',
    status: true,
    ticket: 28,
  },{
    name: 'No.3',
    status: false,
    ticket: 25,
  },{
    name: 'No.4',
    status: true,
    ticket: 27,
  }];

  constructor(
    private dialogService: NbDialogService,
  ) { }

  ngOnInit(): void {
  }

  print(): void {
    this.dialogService.open(TicketComponent, {});
  }

}
