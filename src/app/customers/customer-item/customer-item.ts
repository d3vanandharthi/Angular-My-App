import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer-item',
  imports: [],
  templateUrl: './customer-item.html',
  styleUrl: './customer-item.css',
})
export class CustomerItem {
  @Input() customer: any;
  @Output() selected = new EventEmitter<string>();

  onSelect() {
    this.selected.emit(this.customer.name);
  }
}
