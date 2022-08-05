import { Component, OnInit } from '@angular/core';
import {
  NbComponentStatus,
  NbGlobalPhysicalPosition,
  NbGlobalPosition,
  NbToastrService,
  NbDialogRef,
} from '@nebular/theme';

@Component({
  selector: 'ngx-counter-edit-dialog',
  templateUrl: './counter-edit-dialog.component.html',
  styleUrls: ['./counter-edit-dialog.component.scss']
})
export class CounterEditDialogComponent {

  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;

  constructor(
    protected ref: NbDialogRef<CounterEditDialogComponent>,
    private toastrService: NbToastrService,
  ) {}

  cancel() {
    this.ref.close();
  }

  edit(number) {
    this.showToast('success', "Client", "Client data has been edited successfully");
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
