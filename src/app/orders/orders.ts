import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders',
  imports: [],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})

export class Orders {
  constructor(private route: ActivatedRoute) { }

  orderId: any;

  ngOnInit() {
    this.orderId = this.route.snapshot.paramMap.get('id');
  }

}
