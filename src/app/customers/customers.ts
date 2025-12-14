import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerItem } from './customer-item/customer-item';
import { CustomersService } from './customers.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customers',
  imports: [CommonModule, FormsModule, CustomerItem, RouterLink],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})

export class Customers {

  ngOnInit() {
    this.customersService.getCustomers()
      .subscribe(data => this.customers = data);
  }

  constructor(private customersService: CustomersService) { }

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  buy(name: string) {
    alert(name + " just bought something!");
  }

  delete(id: number) {
    // 1. Tell service to delete it
    this.customersService.deleteCustomer(id);

    // 2. Refresh the list (ask service for the latest copy)
    this.customersService.getCustomers()
      .subscribe(data => this.customers = data);
  }

  isVisible = true;
  pageTitle = "My Amazing Customers"; // This is your data
  customers: any[] = [];


}

