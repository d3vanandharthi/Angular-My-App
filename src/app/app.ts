import { Component, OnInit } from '@angular/core';
import { CustomersComponent } from './customers/customers.component';

@Component({
  standalone: true,
  imports: [CustomersComponent],
  selector: 'app-root',
  template: ` <app-customers></app-customers> `,
})
export class App implements OnInit {
  constructor() {}

  ngOnInit() {}
}
