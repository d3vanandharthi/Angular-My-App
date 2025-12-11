import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { Customers } from './app/customers/customers';

import { RouterOutlet, RouterLink } from '@angular/router';
import { appConfig } from './app/app.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav>
      <a routerLink="/customers">Customers</a> |
      <a routerLink="/orders">Orders</a>
    </nav>
    <hr>
    <router-outlet></router-outlet>
  `,
})
export class App { }

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
