import { Component, OnInit } from '@angular/core';
import {
  NbComponentStatus,
  NbGlobalPhysicalPosition,
  NbGlobalPosition,
  NbToastrService,
  NbDialogRef,
} from '@nebular/theme';

@Component({
  selector: 'ngx-counter-add-dialog',
  templateUrl: './counter-add-dialog.component.html',
  styleUrls: ['./counter-add-dialog.component.scss']
})
export class CounterAddDialogComponent {

  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;

  countNo: string;
  employee: number;

  constructor(
    protected ref: NbDialogRef<CounterAddDialogComponent>,
    private toastrService: NbToastrService,
  ) {}

  cancel() {
    this.ref.close();
  }

  submit() {
    this.showToast('success', "Client", "New Client has been added successfully");
    this.showToast('warning', "Client", "There was an issue");
    // this.ref.close(number);
  }

  private showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: true,
      duration: 2000,
      hasIcon: false,
      position: this.position,
      preventDuplicates: false,
    };

    this.toastrService.show(
      body,
      'Content',
      config);
  }

}
