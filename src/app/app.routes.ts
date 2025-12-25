import { Routes } from '@angular/router';
import { Customers } from './customers/customers';
import { Orders } from './orders/orders';
import { CustomerAdd } from './customers/customer-add/customer-add';
import { Login } from './login/login';          // <--- Import Login
import { authGuard } from './auth/auth-guard';  // <--- Import Guard

export const routes: Routes = [
    { path: 'login', component: Login },        // <--- New Route

    // Protected Routes (added canActivate)
    { path: 'customers', component: Customers, canActivate: [authGuard] },
    { path: 'orders/:id', component: Orders, canActivate: [authGuard] },
    { path: 'customers/add', component: CustomerAdd, canActivate: [authGuard] },
    { path: 'customers/edit/:id', component: CustomerAdd, canActivate: [authGuard] },

    { path: '', redirectTo: '/customers', pathMatch: 'full' }
];