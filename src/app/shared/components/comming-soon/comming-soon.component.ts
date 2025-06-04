import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../../../shared/components/layout/layout.component';

@Component({
  selector: 'app-comming-soon',
  templateUrl: './comming-soon.component.html',
  styleUrl: './comming-soon.component.scss',
  standalone: true,
  imports: [CommonModule, LayoutComponent]
})
export class CommingSoonComponent {

}
