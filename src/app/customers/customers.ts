import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerItem } from './customer-item/customer-item';

@Component({
  selector: 'app-customers',
  imports: [CommonModule, FormsModule, CustomerItem],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})

export class Customers {

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  buy(name: string) {
    alert(name + " just bought something!");
  }

  isVisible = true;
  pageTitle = "My Amazing Customers"; // This is your data
  customers = [
    { id: 1, name: 'John Doe', city: 'Phoenix' },
    { id: 2, name: 'Jane Doe', city: 'Seattle' },
    { id: 3, name: 'Michelle Thomas', city: 'New York' }
  ];
}

