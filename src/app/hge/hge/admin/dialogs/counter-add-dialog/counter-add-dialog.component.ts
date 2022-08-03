import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-counter-add-dialog',
  templateUrl: './counter-add-dialog.component.html',
  styleUrls: ['./counter-add-dialog.component.scss']
})
export class CounterAddDialogComponent {

  constructor(protected ref: NbDialogRef<CounterAddDialogComponent>) {}

  cancel() {
    this.ref.close();
  }

  submit(number) {
    this.ref.close(number);
  }

}
