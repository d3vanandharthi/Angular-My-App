import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CustomersService {
    constructor(private http: HttpClient) { }

    // 1. Get ALL (Keep this simple for the list)

    getCustomers(): Observable<any[]> {
        return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
            .pipe(
                map(users => users.map(u => ({
                    id: u.id,
                    name: u.name,
                    city: u.address.city
                })))
            );
    }

    // 2. Get ONE (New method for the Edit Form)
    getCustomer(id: number): Observable<any> {
        const customer = this.customers.find(c => c.id === id);
        return of(customer);
    }

    // 3. Update (Find the item and change its values)
    updateCustomer(id: number, newData: any) {
        const index = this.customers.findIndex(c => c.id === id);
        if (index !== -1) {
            // Merge existing ID with new name/city
            this.customers[index] = { id: id, ...newData };
        }
    }

    addCustomer(customer: any) {
        customer.id = this.customers.length + 1;
        this.customers.push(customer);
    }

    deleteCustomer(id: number) {
        // Filter out the customer with the matching ID
        this.customers = this.customers.filter(c => c.id !== id);
    }


    customers = [
        { id: 1, name: 'Dev H', city: 'Phoenix' },
        { id: 2, name: 'Jane Doe', city: 'Seattle' },
        { id: 3, name: 'Michelle Thomas', city: 'New York' }
    ];
}
