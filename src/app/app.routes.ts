import { Routes } from '@angular/router';
import { Customers } from './customers/customers';
import { Orders } from './orders/orders';
import { CustomerAdd } from './customers/customer-add/customer-add';

export const routes: Routes = [
    { path: 'customers', component: Customers },
    { path: 'orders/:id', component: Orders },
    { path: '', redirectTo: '/customers', pathMatch: 'full' }, // Default route
    { path: 'customers/add', component: CustomerAdd },
    { path: 'customers/edit/:id', component: CustomerAdd }
];
