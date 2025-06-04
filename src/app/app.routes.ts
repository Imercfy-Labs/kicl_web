import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
  },
  {
    path: 'dashboard',
    // loadComponent: () => import('./features/dashboard/dashboard.component').then(c => c.DashboardComponent),
    loadComponent: () => import('./shared/components/comming-soon/comming-soon.component').then(c => c.CommingSoonComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'product-tree',
    loadComponent: () => import('./features/product-tree/product-tree.component').then(c => c.ProductTreeComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'sales-officer',
    // loadComponent: () => import('./features/sales-officer/sales-officer.component').then(c => c.SalesOfficerComponent),
    loadComponent: () => import('./shared/components/comming-soon/comming-soon.component').then(c => c.CommingSoonComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'inventory',
    // loadComponent: () => import('./features/inventory/inventory.component').then(c => c.InventoryComponent),
    loadComponent: () => import('./shared/components/comming-soon/comming-soon.component').then(c => c.CommingSoonComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'orders',
    loadComponent: () => import('./features/orders/orders.component').then(c => c.OrdersComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'invoice',
    // loadComponent: () => import('./features/invoice/invoice.component').then(c => c.InvoiceComponent),
    loadComponent: () => import('./shared/components/comming-soon/comming-soon.component').then(c => c.CommingSoonComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'field-development',
    // loadComponent: () => import('./features/field-development/field-development.component').then(c => c.FieldDevelopmentComponent),
    loadComponent: () => import('./shared/components/comming-soon/comming-soon.component').then(c => c.CommingSoonComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'add-order',
    loadComponent: () => import('./features/add-order/add-order.component').then(c => c.AddOrderComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'inventory-view',
    // loadComponent: () => import('./features/inventory-view/inventory-view.component').then(c => c.InventoryViewComponent),
    loadComponent: () => import('./shared/components/comming-soon/comming-soon.component').then(c => c.CommingSoonComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'user-management',
    // loadComponent: () => import('./features/user-management/user-management.component').then(c => c.UserManagementComponent),
    loadComponent: () => import('./shared/components/comming-soon/comming-soon.component').then(c => c.CommingSoonComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'field-develop-log',
    // loadComponent: () => import('./features/field-develop-log/field-develop-log.component').then(c => c.FieldDevelopLogComponent),
    loadComponent: () => import('./shared/components/comming-soon/comming-soon.component').then(c => c.CommingSoonComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'masters',
    loadComponent: () => import('./features/masters/masters.component').then(c => c.MastersComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'masters/sales-persons',
    loadComponent: () => import('./features/masters/sales-persons/sales-persons.component').then(c => c.SalesPersonsComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'comming-soon',
    loadComponent: () => import('./shared/components/comming-soon/comming-soon.component').then(c => c.CommingSoonComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'dealer-management',
    loadComponent: () => import('./shared/components/comming-soon/comming-soon.component').then(c => c.CommingSoonComponent),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'auth/login'
  }
];