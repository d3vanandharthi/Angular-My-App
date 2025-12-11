import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CustomersService {

    getCustomers(): Observable<any[]> {
        return of(this.customers);
    }

    customers = [
        { id: 1, name: 'Dev H', city: 'Phoenix' },
        { id: 2, name: 'Jane Doe', city: 'Seattle' },
        { id: 3, name: 'Michelle Thomas', city: 'New York' }
    ];
}
