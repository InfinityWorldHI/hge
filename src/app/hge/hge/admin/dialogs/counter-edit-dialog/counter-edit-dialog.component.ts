import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-counter-edit-dialog',
  templateUrl: './counter-edit-dialog.component.html',
  styleUrls: ['./counter-edit-dialog.component.scss']
})
export class CounterEditDialogComponent {

  constructor(protected ref: NbDialogRef<CounterEditDialogComponent>) {}

  cancel() {
    this.ref.close();
  }

  edit(number) {
    this.ref.close(number);
  }

}
