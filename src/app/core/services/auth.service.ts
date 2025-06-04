import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from './api.service';

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  role_id?: number;
  branch_id?: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private currentUser: User | null = null;
  private token: string | null = null;

  constructor(private apiService: ApiService) {
    this.token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('currentUser');
    if (this.token && storedUser) {
      this.currentUser = JSON.parse(storedUser);
      this.isAuthenticated = true;
    }
  }

  login(email: string, password: string): Observable<any> {
    return this.apiService.post('/login', { email, password }).pipe(
      tap(response => {
        console.log("response:", response);
        // Check if user is a sales person (role_id === 5)
        if (response.user && response.user.role === "Sales Person") {
          this.logout(); // Clear any existing auth state
          throw new Error('Sales persons are not allowed to login via web interface');
        }

        this.token = response.token;
        this.currentUser = response.user;
        localStorage.setItem('token', this.token || '');
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        this.isAuthenticated = true;
      })
    );
  }

  signup(name: string, email: string, password: string): Observable<any> {
    return this.apiService.post('/register', {
      name,
      email,
      password,
      role_id: 1, // Default role (adjust as needed)
      branch_id: 1 // Default branch (adjust as needed)
    });
  }

  forgotPassword(email: string): Observable<any> {
    return throwError(() => new Error('Forgot password functionality not yet implemented.'));
  }

  logout(): void {
    this.isAuthenticated = false;
    this.currentUser = null;
    this.token = null;
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  getToken(): string | null {
    return this.token;
  }

  isAdmin(): boolean {
    return this.currentUser?.role === 'Admin';
  }
}