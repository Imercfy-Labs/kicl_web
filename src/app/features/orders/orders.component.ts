import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from '../../shared/components/layout/layout.component';
import { OrderService } from '../../core/services/order.service';
import { AuthService } from '../../core/services/auth.service';
import { OrderSummary } from '../../core/interfaces/order.interface';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  standalone: true,
  imports: [CommonModule, LayoutComponent, FormsModule]
})
export class OrdersComponent implements OnInit {
  orders: OrderSummary[] = [];
  rowsPerPage = '09';
  currentPage = 1;
  totalPages = 1;
  loading = false;
  error = '';
  isAdmin = false;

  // Filters
  startDate = '';
  endDate = '';
  selectedDealerId: number | null = null;

  constructor(
    private orderService: OrderService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.isAdmin = this.authService.isAdmin();
    this.loadOrders();
  }

  loadOrders() {
    this.loading = true;
    this.error = '';
    
    this.orderService.getOrderSummary(
      this.startDate || undefined,
      this.endDate || undefined,
      this.selectedDealerId || undefined
    ).subscribe({
      next: (data) => {
        this.orders = data;
        this.totalPages = Math.ceil(data.length / parseInt(this.rowsPerPage));
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load orders:', err);
        this.error = 'Failed to load orders. Please try again.';
        this.loading = false;
      }
    });
  }

  applyFilters() {
    this.loadOrders();
  }

  clearFilters() {
    this.startDate = '';
    this.endDate = '';
    this.selectedDealerId = null;
    this.loadOrders();
  }
}