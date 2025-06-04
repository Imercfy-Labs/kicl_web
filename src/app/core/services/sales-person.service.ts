import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SalesPerson, CreateSalesPersonDto } from '../interfaces/sales-person.interface';

@Injectable({
  providedIn: 'root'
})
export class SalesPersonService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createSalesPerson(data: CreateSalesPersonDto): Observable<SalesPerson> {
    // Use the register endpoint with role_id for sales person
    return this.http.post<SalesPerson>(`${this.apiUrl}/register`, {
      ...data,
      role_id: 5, // Assuming 2 is the role_id for sales persons
      branch_id: 1 // Convert branch string to number for API
    });
  }

  getSalesPersons(): Observable<SalesPerson[]> {
    return this.http.get<SalesPerson[]>(`${this.apiUrl}/users`);
  }
}