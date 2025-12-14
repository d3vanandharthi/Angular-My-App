import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CustomersService } from '../customers.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-customer-add',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './customer-add.html',
  styleUrl: './customer-add.css',
})



export class CustomerAdd {

  customerId: any = null;
  ngOnInit() {
    this.customerId = this.route.snapshot.paramMap.get('id');
    if (this.customerId) {
      this.customersService.getCustomer(Number(this.customerId)).subscribe(data => {
        this.customerForm.patchValue(data);
      });
    }
  }

  constructor(
    private customersService: CustomersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  // Define the Form
  customerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required])
  });

  submit() {
    if (this.customerForm.valid) {
      if (this.customerId) {
        // Edit Mode
        this.customersService.updateCustomer(Number(this.customerId), this.customerForm.value);
      } else {
        // Add Mode
        this.customersService.addCustomer(this.customerForm.value);
      }
      this.router.navigate(['/customers']);
    }
  }

}