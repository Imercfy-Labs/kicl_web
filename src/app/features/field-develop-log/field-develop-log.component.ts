import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from '../../shared/components/layout/layout.component';

interface FieldLog {
  date: string;
  location: string;
  activityType: string;
  description: string;
  status: string;
  assignedTo: string;
}

@Component({
  selector: 'app-field-develop-log',
  templateUrl: './field-develop-log.component.html',
  styleUrls: ['./field-develop-log.component.scss'],
  standalone: true,
  imports: [CommonModule, LayoutComponent, FormsModule]
})
export class FieldDevelopLogComponent {
  public fieldLogs: FieldLog[] = [
    {
      date: '20/03/2025',
      location: 'North Field',
      activityType: 'Soil Testing',
      description: 'Conducting soil analysis for nutrient levels',
      status: 'Completed',
      assignedTo: 'John Wick'
    },
    {
      date: '21/03/2025',
      location: 'South Field',
      activityType: 'Irrigation Check',
      description: 'Inspecting irrigation system efficiency',
      status: 'In-Progress',
      assignedTo: 'Raghul Dravid'
    },
    {
      date: '22/03/2025',
      location: 'East Field',
      activityType: 'Pest Control',
      description: 'Implementing integrated pest management',
      status: 'Pending',
      assignedTo: 'Louis Martin'
    },
    {
      date: '23/03/2025',
      location: 'West Field',
      activityType: 'Crop Monitoring',
      description: 'Assessing crop growth and health',
      status: 'Completed',
      assignedTo: 'Machael Vaughan'
    }
  ];

  public rowsPerPage = '04';
  public currentPage = 1;
  public totalPages = 7;
}