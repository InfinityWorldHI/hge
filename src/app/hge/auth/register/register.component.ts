import { Component, OnInit } from '@angular/core';
import { NbRegisterComponent } from '@nebular/auth';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  loading: boolean = false;

  constructor( ) { }

  ngOnInit(): void {
  }

}
