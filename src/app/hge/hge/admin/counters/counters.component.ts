import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { CounterAddDialogComponent } from '../dialogs/counter-add-dialog/counter-add-dialog.component';
import { CounterEditDialogComponent } from '../dialogs/counter-edit-dialog/counter-edit-dialog.component';

@Component({
  selector: 'ngx-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.scss']
})
export class CountersComponent implements OnInit {

  constructor(
    private dialogService: NbDialogService
  ) { }

  ngOnInit(): void {
  }

  addCounter(): void {
    this.dialogService.open(CounterAddDialogComponent, {});
  }

  editCounter(id: any): void {
    this.dialogService.open(CounterEditDialogComponent, {});
  }

  delCounter(id: any): void {

  }

}
