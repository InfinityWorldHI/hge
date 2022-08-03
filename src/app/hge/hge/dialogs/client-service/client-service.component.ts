import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-client-service',
  templateUrl: './client-service.component.html',
  styleUrls: ['./client-service.component.scss']
})
export class ClientServiceComponent implements OnInit {

  @Input() id: number;

  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    protected ref: NbDialogRef<ClientServiceComponent>) {
  }

  ngOnInit() {
    this.firstForm = this.fb.group({
      firstCtrl: ['', Validators.required],
    });

    this.secondForm = this.fb.group({
      secondCtrl: ['', Validators.required],
    });

    this.thirdForm = this.fb.group({
      thirdCtrl: ['', Validators.required],
    });
  }

  onFirstSubmit() {
    this.firstForm.markAsDirty();
  }

  onSecondSubmit() {
    this.secondForm.markAsDirty();
  }

  onThirdSubmit() {
    this.thirdForm.markAsDirty();
  }

  dismiss() {
    this.ref.close();
  }

}
