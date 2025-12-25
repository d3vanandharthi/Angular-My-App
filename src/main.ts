import { Component } from '@angular/core';
import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterOutlet, RouterLink } from '@angular/router';
import { appConfig } from './app/app.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div class="container">
        <a class="navbar-brand" href="#">My App</a>
        <div class="navbar-nav">
          <a class="nav-link" routerLink="/customers" routerLinkActive="active">Customers</a>
          <a class="nav-link" routerLink="/orders" routerLinkActive="active">Orders</a>
        </div>
      </div>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class App { }

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
