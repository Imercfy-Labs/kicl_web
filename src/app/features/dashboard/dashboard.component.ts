import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService, User } from '../../core/services/auth.service';
import { NgChartsModule, BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { LayoutComponent } from '../../shared/components/layout/layout.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule, NgChartsModule, LayoutComponent]
})
export class DashboardComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  
  currentUser: User | null = null;
  selectedPeriod: string = 'last3Months';
  selectedStockPeriod: string = 'last3Months';
  
  // Line Chart Configuration
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [3500, 2000, 3800, 2800, 3200],
        label: 'Delivered',
        backgroundColor: 'rgba(52, 152, 219, 0.1)',
        borderColor: 'rgba(52, 152, 219, 1)',
        pointBackgroundColor: 'rgba(52, 152, 219, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(52, 152, 219, 1)',
        fill: true,
        tension: 0.4
      },
      {
        data: [2000, 2800, 2200, 2500, 1500],
        label: 'Remaining',
        backgroundColor: 'rgba(230, 126, 34, 0.1)',
        borderColor: 'rgba(230, 126, 34, 1)',
        pointBackgroundColor: 'rgba(230, 126, 34, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(230, 126, 34, 1)',
        fill: true,
        tension: 0.4
      },
    ],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  // Bar Chart Configuration
  public barChartData: ChartConfiguration['data'] = {
    labels: ['Dealer1', 'Dealer2', 'Dealer3', 'Dealer4', 'Dealer5', 'Dealer6', 'Dealer7', 'Dealer8'],
    datasets: [
      {
        data: [45000, 55000, 42000, 35000, 45000, 28000, 50000, 42000],
        label: 'Outstanding Bill 1',
        backgroundColor: 'rgba(52, 152, 219, 0.8)',
        barThickness: 12,
        borderRadius: 4
      },
      {
        data: [48000, 45000, 50000, 40000, 42000, 40000, 38000, 40000],
        label: 'Outstanding Bill 2',
        backgroundColor: 'rgba(46, 204, 113, 0.8)',
        barThickness: 12,
        borderRadius: 4
      }
    ]
  };

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  // Active SOs Data
  public activeSOs = [
    {
      name: 'John wick',
      location: '950 Cedar Road, Port Bethany, Idaho - 56137, Saudi Arabia'
    },
    {
      name: 'Raghul Dravid',
      location: '#15 Cedar Road, Port Bethany, Idaho - 56137, Saudi Arabia'
    },
    {
      name: 'Ajay',
      location: '75 Cedar Road, Port Bethany, Idaho - 56137, Saudi Arabia'
    },
    {
      name: 'Vijay',
      location: '9 Cedar Road, Port Bethany, Idaho - 56137, Saudi Arabia'
    }
  ];

  // Field Activities Data
  public fieldActivities = [
    {
      name: 'John wick',
      location: '950 Cedar Road, Port Bethany, Idaho - 56137, Saudi Arabia',
      time: '10:00 AM 12:00 PM',
      expenses: 10000
    },
    {
      name: 'Raghul Dravid',
      location: '#15 Cedar Road, Port Bethany, Idaho - 56137, Saudi Arabia',
      time: '02:00 PM 03:00 PM',
      expenses: 1000
    },
    {
      name: 'Ajay',
      location: '75 Cedar Road, Port Bethany, Idaho - 56137, Saudi Arabia',
      time: '04:00 AM 05:00 PM',
      expenses: 10000
    },
    {
      name: 'Vijay',
      location: '9 Cedar Road, Port Bethany, Idaho - 56137, Saudi Arabia',
      time: '04:00 AM 05:00 PM',
      expenses: 1000
    }
  ];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
  }

  updatePeriod(period: string): void {
    this.selectedPeriod = period;
    // Update chart data based on selected period
  }

  updateStockPeriod(period: string): void {
    this.selectedStockPeriod = period;
    // Update stock data based on selected period
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}