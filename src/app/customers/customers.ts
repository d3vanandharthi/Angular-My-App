import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-customers',
  imports: [CommonModule],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})

export class Customers {
  pageTitle = "My Amazing Customers"; // This is your data
  customers = [
    { id: 1, name: 'John Doe', city: 'Phoenix' },
    { id: 2, name: 'Jane Doe', city: 'Seattle' },
    { id: 3, name: 'Michelle Thomas', city: 'New York' }
  ];
}

