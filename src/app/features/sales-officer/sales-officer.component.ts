import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../../shared/components/layout/layout.component';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-sales-officer',
  templateUrl: './sales-officer.component.html',
  styleUrls: ['./sales-officer.component.scss'],
  standalone: true,
  imports: [CommonModule, LayoutComponent, GoogleMapsModule]
})
export class SalesOfficerComponent implements OnInit {
  selectedOfficer = {
    initials: 'JW',
    name: 'John wick',
    location: '950 Cedar Road, Port Bethany, Idaho - 56137, Saudi Arabia',
    time: '10:00 AM 12:00 PM'
  };

  stats = {
    punchLogs: {
      value: '10.00',
      unit: 'AM',
      icon: 'fas fa-clock'
    },
    kmTracking: {
      value: '40',
      unit: 'KM',
      icon: 'fas fa-route'
    },
    visitSummary: {
      value: '15',
      unit: '',
      icon: 'fas fa-store'
    },
    nightHalt: {
      value: '10',
      unit: 'HRS',
      icon: 'fas fa-moon'
    }
  };

  center: google.maps.LatLngLiteral = { lat: 48.8566, lng: 2.3522 };
  zoom = 6;

  ngOnInit(): void {
    // Initialize map and other components
  }
}