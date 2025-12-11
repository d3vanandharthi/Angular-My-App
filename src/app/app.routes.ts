import { Routes } from '@angular/router';
import { Customers } from './customers/customers';
import { Orders } from './orders/orders';

export const routes: Routes = [
    { path: 'customers', component: Customers },
    { path: 'orders/:id', component: Orders },
    { path: '', redirectTo: '/customers', pathMatch: 'full' }, // Default route
];
