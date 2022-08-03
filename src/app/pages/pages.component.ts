import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { TokenService } from '../hge/auth/auth-services/token.service';

import { MENU_ITEMS } from './pages-menu';
import { PagesService } from './pages.service';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  templateUrl: './pages.component.html',
})
export class PagesComponent implements OnInit {

  // menu = MENU_ITEMS;
  menu: NbMenuItem[];

  constructor(
    private pagesservice: PagesService,
    private token: TokenService,
  ) { }

  ngOnInit(): void {
    if (this.token.client()) {
      console.log('Client Role');

      this.menu = [
        {
          title: 'Profile',
          icon: 'home-outline',
          link: 'profile',
          home: true,
        },
        {
          title: 'Application',
          icon: 'home-outline',
          link: 'application',
        },
        {
          title: 'Services',
          icon: 'home-outline',
          link: 'services',
        },
        {
          title: 'Settings',
          icon: 'home-outline',
          link: 'settings',
        },
      ];
    } else if (this.token.employee()) {
      console.log('Employee Role');

      this.menu = [
        {
          title: 'Clients',
          icon: 'home-outline',
          link: 'panel',
        },
        // {
        //   title: 'Clients',
        //   icon: 'home-outline',
        //   link: 'clients',
        // },
        {
          title: 'Settings',
          icon: 'home-outline',
          link: 'settings',
        },
      ];
    } else if (this.token.reception()) {
      console.log('Reception Role');

      this.menu = [
        {
          title: 'Queue System',
          icon: 'home-outline',
          link: 'queue',
          home: true,
        },
        {
          title: 'Settings',
          icon: 'home-outline',
          link: 'settings',
        },
      ];
    } else if (this.token.admin()) {
      console.log('Admin Role');

      this.menu = [
        {
          title: 'Dashboard',
          icon: 'home-outline',
          link: 'dashboard',
          home: true,
        },
        {
          title: 'Employee',
          icon: 'body-outline',
          link: 'employee',
        },
        {
          title: 'HR',
          icon: 'people-circle-outline',
          link: 'hr',
        },
        {
          title: 'Finance',
          icon: 'cash-outline',
          link: 'finance',
        },
        {
          title: 'Payments',
          icon: 'card-outline',
          link: 'payments',
        },
        {
          title: 'Counters',
          icon: 'pricetags-outline',
          link: 'counters',
        },
        {
          title: 'Settings',
          icon: 'settings-outline',
          link: 'settings',
        },
      ];
    } else {
      console.log('Guest');
    }
  }
}
