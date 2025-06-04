import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LayoutComponent } from '../../shared/components/layout/layout.component';
import { OrderService } from '../../core/services/order.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss'],
  standalone: true,
  imports: [CommonModule, LayoutComponent, ReactiveFormsModule]
})
export class AddOrderComponent implements OnInit {
  orderForm: FormGroup;
  isSubmitting = false;
  errorMessage = '';
  successMessage = '';
  isAdmin = false;

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService,
    private authService: AuthService,
    private router: Router
  ) {
    this.orderForm = this.fb.group({
      dealer_id: ['', [Validators.required]],
      product_id: ['', [Validators.required]],
      quantity: ['', [Validators.required, Validators.min(1)]],
      price: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit() {
    this.isAdmin = this.authService.isAdmin();
    if (!this.isAdmin) {
      this.router.navigate(['/orders']);
    }
  }

  onSubmit() {
    if (this.orderForm.invalid || !this.isAdmin) {
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';
    this.successMessage = '';

    const currentUser = this.authService.getCurrentUser();
    if (!currentUser) {
      this.errorMessage = 'User not authenticated';
      return;
    }

    const orderData = {
      dealer_id: this.orderForm.value.dealer_id,
      sales_officer_id: currentUser.id,
      branch_id: currentUser.branch_id || 1,
      items: [{
        product_id: this.orderForm.value.product_id,
        quantity: this.orderForm.value.quantity,
        price: this.orderForm.value.price
      }]
    };

    this.orderService.createOrder(orderData).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.successMessage = 'Order created successfully';
        this.orderForm.reset();
        setTimeout(() => {
          this.router.navigate(['/orders']);
        }, 2000);
      },
      error: (error) => {
        this.isSubmitting = false;
        this.errorMessage = error.error?.message || 'Failed to create order';
      }
    });
  }
}