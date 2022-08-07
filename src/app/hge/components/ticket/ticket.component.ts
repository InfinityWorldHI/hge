import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cancel(): void {
    console.log("cancel");
  }

  print(): void {
    // window.print();
     const ticket = document.getElementById("ticket").innerHTML;
     const originalContents = document.body.innerHTML;
     document.body.innerHTML = ticket;
     window.print();
     document.body.innerHTML = originalContents;
     console.log("cancel");
  }

}
