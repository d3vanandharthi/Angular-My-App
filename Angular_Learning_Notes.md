# Angular Step-by-Step Learning Notes

This guide contains the exact steps, commands, and code we wrote to build the `Customers` application.

---

## Chapter 1: The Clean Slate (Standalone Setup)
**Goal:** Reset the project to a minimal "Hello World" to understand the basics.

1.  **Delete Everything:** We deleted the entire `src/app` folder to remove the default boilerplate.
2.  **Create Entry Point (`src/main.ts`):**
    We created a minimal file to bootstrap the app without Modules.
    ```typescript
    import { Component } from '@angular/core';
    import { bootstrapApplication } from '@angular/platform-browser';

    @Component({
      selector: 'app-root',
      standalone: true,
      template: `<h1>Hello World</h1>`
    })
    export class App {}

    bootstrapApplication(App);
    ```

---

## Chapter 2: Creating a Component
**Goal:** Create a structured component for our Customers feature.

1.  **Command:**
    ```bash
    ng generate component customers
    ```
2.  **Wiring it up:**
    We had to tell `main.ts` about this new component.
    *   **Import it:** `import { CustomersComponent } ...`
    *   **Add to Imports:** `imports: [CustomersComponent]` inside the `@Component` decorator of `App`.
    *   **Use Helper Tag:** Added `<app-customers></app-customers>` to the template.

---

## Chapter 3 & 4: Data Binding & Loops
**Goal:** Display a list of dynamic data.

1.  **Define Data (`customers.ts`):**
    ```typescript
    customers = [
      { id: 1, name: 'John', city: 'Phoenix' },
      { id: 2, name: 'Jane', city: 'Seattle' }
    ];
    ```
2.  **Import CommonModule:**
    Required for structural directives like `*ngFor`.
    ```typescript
    imports: [CommonModule]
    ```
3.  **Display Logic (`customers.html`):**
    Used **Interpolation** `{{}}` and **Loops** `*ngFor`.
    ```html
    <ul>
      <li *ngFor="let cust of customers">
        {{ cust.id }} - {{ cust.name }}
      </li>
    </ul>
    ```

---

## Chapter 5: Event Binding
**Goal:** Handle user clicks.

1.  **Create Function (`customers.ts`):**
    ```typescript
    buy(name: string) {
      alert(name + " bought something!");
    }
    ```
2.  **Bind Click (`customers.html`):**
    Used parentheses `()` for events.
    ```html
    <button (click)="buy(cust.name)">Buy</button>
    ```

---

## Chapter 6: Two-Way Binding
**Goal:** Live sync between Input box and Data.

1.  **Import FormsModule (`customers.ts`):**
    ```typescript
    import { FormsModule } from '@angular/forms';
    imports: [CommonModule, FormsModule] // Add to imports array
    ```
2.  **Bind Input (`customers.html`):**
    Used "Banana in a Box" syntax `[()]`.
    ```html
    <input [(ngModel)]="pageTitle" type="text">
    ```

---

## Chapter 7: Conditional Logic (*ngIf)
**Goal:** Hide/Show the list.

1.  **Logic:** Added `isVisible = true` property and `toggle()` method.
2.  **View:**
    ```html
    <button (click)="toggle()">Toggle</button>
    <ul *ngIf="isVisible"> ... </ul>
    ```

---

## Chapter 8 & 9: Child Components & Communication
**Goal:** Break the app into smaller pieces (`CustomerItemComponent`).

1.  **Create Child:** `ng g c customers/customer-item`
2.  **Pass Data DOWN (`@Input`):**
    *   **Child (`customer-item.ts`):**
        ```typescript
        @Input() customer: any;
        ```
    *   **Parent (`customers.html`):**
        ```html
        <app-customer-item [customer]="cust"></app-customer-item>
        ```
3.  **Pass Events UP (`@Output`):**
    *   **Child (`customer-item.ts`):**
        ```typescript
        @Output() selected = new EventEmitter<string>();
        // Call this.selected.emit('data') to send
        ```
    *   **Parent (`customers.html`):**
        ```html
        <app-customer-item (selected)="buy($event)"></app-customer-item>
        ```

---

## Chapter 10: Services
**Goal:** Move data out of the component.

1.  **Create Service:** `ng g s customers/customers`
2.  **Move Data:** Cut-pasted the `customers` array into `CustomersService`.
3.  **Inject Service (`customers.ts`):**
    ```typescript
    constructor(private customersService: CustomersService) {}

    ngOnInit() {
      // Fetch data on load
      this.customers = this.customersService.customers;
    }
    ```

---

## Chapter 11: Observables (RxJS)
**Goal:** Handle async data streams (preparation for API calls).

1.  **Update Service:** return an `Observable` instead of raw data.
    ```typescript
    getCustomers(): Observable<any[]> {
      return of(this.customers); // 'of' wraps data in an Observable
    }
    ```
2.  **Update Component:** Subscribe to the stream.
    ```typescript
    ngOnInit() {
      this.customersService.getCustomers()
    
---

## Chapter 12: Routing
**Goal:** Create navigation between pages (Customers vs. Orders).

1.  **Generate Page:** `ng g c orders`
2.  **Define Routes (`app.routes.ts`):**
    ```typescript
    export const routes: Routes = [
      { path: 'customers', component: Customers },
      { path: 'orders', component: Orders },
      { path: '', redirectTo: '/customers', pathMatch: 'full' }
    ];
    ```
3.  **Provide Router (`app.config.ts`):**
    ```typescript
    providers: [provideRouter(routes)]
    ```
4.  **Use in App (`main.ts`):**
    *   **Bootstrap:** `bootstrapApplication(App, appConfig)`
    *   **Template:**
        ```html
        <nav>
          <a routerLink="/customers">Customers</a>
          <a routerLink="/orders">Orders</a>
        </nav>

---

## Chapter 13: Dynamic Routing (Parameters)
**Goal:** Visit specific pages like `/orders/1`.

1.  **Update Route (`app.routes.ts`):**
    Add `/:id` to capture the parameter.
    ```typescript
    { path: 'orders/:id', component: Orders }
    ```
2.  **Pass ID from View (`customer-item.html`):**
    Use RouterLink with an array.
    ```html
    <a [routerLink]="['/orders', customer.id]">View Orders</a>
    ```
    *Note: Must import `RouterLink` in component imports.*
3.  **Read ID in Logic (`orders.ts`):**
    Use `ActivatedRoute`.
    ```typescript
    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
      // route.snapshot.paramMap is a map of all parameters
      this.orderId = this.route.snapshot.paramMap.get('id');
    }
    ```

