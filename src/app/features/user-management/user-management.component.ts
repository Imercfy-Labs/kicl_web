import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from '../../shared/components/layout/layout.component';

interface User {
  name: string;
  role: string;
  branchAssignment: string;
}

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
  standalone: true,
  imports: [CommonModule, LayoutComponent, FormsModule]
})
export class UserManagementComponent {
  users: User[] = [
    {
      name: 'John Wick',
      role: 'Admin',
      branchAssignment: 'Branch Assignment field here'
    },
    {
      name: 'Raghul Dravid',
      role: 'Member',
      branchAssignment: 'Branch Assignment field here'
    },
    {
      name: 'Louis Martin',
      role: 'Admin',
      branchAssignment: 'Branch Assignment field here'
    },
    {
      name: 'Machael Vaughan',
      role: 'Admin',
      branchAssignment: 'Branch Assignment field here'
    }
  ];

  rowsPerPage = '04';
  currentPage = 1;
  totalPages = 7;
}