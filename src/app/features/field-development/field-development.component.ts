import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from '../../shared/components/layout/layout.component';

interface FieldActivity {
  date: string;
  village: string;
  crop: string;
  pestDisease: string;
  farmerCount: string;
  climate: string;
  imageVideo: string;
  summary: string;
}

@Component({
  selector: 'app-field-development',
  templateUrl: './field-development.component.html',
  styleUrls: ['./field-development.component.scss'],
  standalone: true,
  imports: [CommonModule, LayoutComponent, FormsModule]
})
export class FieldDevelopmentComponent {
  activities: FieldActivity[] = [
    {
      date: '20/03/2025',
      village: 'Mouver',
      crop: 'Fertilizers',
      pestDisease: 'Yellow top borer',
      farmerCount: '200',
      climate: 'Soil Pioneers',
      imageVideo: 'https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg',
      summary: 'Applying it to dry soil, wet foliage, or under direct sunlight'
    },
    {
      date: '15/04/2025',
      village: 'Plailridge',
      crop: 'Pesticides',
      pestDisease: 'Yellow spotted stink bug',
      farmerCount: '52',
      climate: 'water bringers',
      imageVideo: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg',
      summary: 'Under direct sunlight, wet foliage'
    },
    {
      date: '28/05/2025',
      village: 'Egruewell',
      crop: 'Fertilizers',
      pestDisease: 'Tropical nut borer',
      farmerCount: '0012',
      climate: 'fertilize',
      imageVideo: 'https://images.pexels.com/photos/2132168/pexels-photo-2132168.jpeg',
      summary: 'Applied it to dry soil, wet foliage, or under direct sunlight'
    },
    {
      date: '18/06/2025',
      village: 'Yulrsa',
      crop: 'Metalers',
      pestDisease: 'Yellow top borer',
      farmerCount: '202',
      climate: 'Soil Pioneers',
      imageVideo: 'https://images.pexels.com/photos/2132172/pexels-photo-2132172.jpeg',
      summary: 'Applied it to dry soil, wet foliage, or under direct sunlight'
    }
  ];

  rowsPerPage = '09';
  currentPage = 1;
  totalPages = 7;
}