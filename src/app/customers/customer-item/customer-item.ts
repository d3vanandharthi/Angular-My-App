import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customer-item',
  imports: [RouterLink],
  templateUrl: './customer-item.html',
  styleUrl: './customer-item.css',
})
export class CustomerItem {
  @Input() customer: any;
  @Output() selected = new EventEmitter<string>();
  @Output() deleted = new EventEmitter<number>();

  onSelect() {
    this.selected.emit(this.customer.name);
  }
  onDelete() {
    this.deleted.emit(this.customer.id);
  }
}
