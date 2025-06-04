import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SalesPersonService } from '../../../core/services/sales-person.service';
import { SalesPerson, CreateSalesPersonDto } from '../../../core/interfaces/sales-person.interface';

@Component({
  selector: 'app-sales-persons',
  templateUrl: './sales-persons.component.html',
  styleUrls: ['./sales-persons.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class SalesPersonsComponent implements OnInit {
  salesPersonForm: FormGroup;
  salesPersons: SalesPerson[] = [];
  isSubmitting = false;
  errorMessage = '';

  rowsPerPage = '10';
  currentPage = 1;
  totalPages = 5;

  constructor(
    private fb: FormBuilder,
    private salesPersonService: SalesPersonService
  ) {
    this.salesPersonForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required]],
      branch: ['', [Validators.required]],
      territory: ['', [Validators.required]],
      status: ['active', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.loadSalesPersons();
  }

  loadSalesPersons(): void {
    this.salesPersonService.getSalesPersons().subscribe({
      next: (data) => {
        // Filter users to show only sales persons (role_id === 2)
        this.salesPersons = data.filter(user => user.role_id != null && user.role_id === 2);
      },
      error: (error) => {
        console.error('Error loading sales persons:', error);
      }
    });
  }

  onSubmit(): void {
    if (this.salesPersonForm.invalid) {
      Object.keys(this.salesPersonForm.controls).forEach(key => {
        const control = this.salesPersonForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';

    const formData: CreateSalesPersonDto = this.salesPersonForm.value;

    this.salesPersonService.createSalesPerson(formData).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.salesPersonForm.reset({ status: 'active' });
        this.loadSalesPersons();
      },
      error: (error) => {
        this.isSubmitting = false;
        this.errorMessage = error.error?.message || 'Failed to create sales person. Please try again.';
        console.error('Error creating sales person:', error);
      }
    });
  }
}