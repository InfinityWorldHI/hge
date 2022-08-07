import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  constructor(
    protected ref: NbDialogRef<TicketComponent>,
  ) { }

  ngOnInit(): void {
  }

  cancel(): void {
    console.log("cancel");
    this.ref.close();
  }

  print(): void {
    // window.print();
     const ticket = document.getElementById("ticket").innerHTML;
     const originalContents = document.body.innerHTML;
     document.body.innerHTML = ticket;
     window.print();
     document.body.innerHTML = originalContents;
    console.log("cancel");
     this.ref.close();
  }

}
