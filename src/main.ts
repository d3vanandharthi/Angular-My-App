import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { Customers } from './app/customers/customers';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Customers],
  template: `
    <div style="text-align:center; margin-top: 50px;">
      <h1>Hello World!</h1>
      <p>Simple Angular Application</p>
      <app-customers></app-customers>
    </div>
  `,
})
export class App { }

bootstrapApplication(App).catch((err) => console.error(err));
