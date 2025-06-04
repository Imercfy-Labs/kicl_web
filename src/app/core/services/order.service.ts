import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Order, OrderSummary } from '../interfaces/order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createOrder(order: Order): Observable<any> {
    return this.http.post(`${this.apiUrl}/orders`, order);
  }

  getOrderSummary(startDate?: string, endDate?: string, dealerId?: number): Observable<OrderSummary[]> {
    let params = new HttpParams();
    
    if (startDate) {
      params = params.set('start_date', startDate);
    }
    if (endDate) {
      params = params.set('end_date', endDate);
    }
    if (dealerId) {
      params = params.set('dealer_id', dealerId.toString());
    }

    return this.http.get<OrderSummary[]>(`${this.apiUrl}/orders/summary`, { params });
  }
}