import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from '../../shared/components/layout/layout.component';

interface Invoice {
  invoiceId: string;
  orderRef: string;
  date: string;
  productsDetails: string;
  hsn: string;
  gst: string;
  emailHo: string;
}

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
  standalone: true,
  imports: [CommonModule, LayoutComponent, FormsModule]
})
export class InvoiceComponent {
  invoices: Invoice[] = [
    {
      invoiceId: '20250423-001',
      orderRef: '20250423-001',
      date: '20/03/2025',
      productsDetails: 'Fertilizers / 90kg',
      hsn: '20032025 20012027',
      gst: '20012027',
      emailHo: 'caxerax619@shedotu.com'
    },
    {
      invoiceId: '20250423-002',
      orderRef: '20250423-002',
      date: '15/04/2025',
      productsDetails: 'Pesticides / 100kg',
      hsn: '202520012027',
      gst: '52012027',
      emailHo: 'caxerax619@shedotu.com'
    },
    {
      invoiceId: '20250423-003',
      orderRef: '20250423-003',
      date: '28/05/2025',
      productsDetails: 'Fertilizers / 50kg',
      hsn: '200300102027',
      gst: '0012027',
      emailHo: 'caxerax619@shedotu.com'
    },
    {
      invoiceId: '20250423-055',
      orderRef: '20250423-055',
      date: '18/06/2025',
      productsDetails: 'Metalers / 45kg',
      hsn: '200320252012027',
      gst: '202520012027',
      emailHo: 'caxerax619@shedotu.com'
    }
  ];

  rowsPerPage = '09';
  currentPage = 1;
  totalPages = 7;
}