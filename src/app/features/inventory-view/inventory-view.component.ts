import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from '../../shared/components/layout/layout.component';

interface InventoryItem {
  grnNo: string;
  date: string;
  factory: string;
  product: string;
  batchNo: string;
  mfgExp: string;
  quantity: string;
  hsnCode: string;
  uploadFile: string;
}

@Component({
  selector: 'app-inventory-view',
  templateUrl: './inventory-view.component.html',
  styleUrls: ['./inventory-view.component.scss'],
  standalone: true,
  imports: [CommonModule, LayoutComponent, FormsModule]
})
export class InventoryViewComponent {
  searchTerm = '';
  rowsPerPage = '09';
  currentPage = 1;
  totalPages = 7;

  private _allInventoryItems: InventoryItem[] = [
    {
      grnNo: 'GRN-20250423-001',
      date: '20/04/2025',
      factory: 'India',
      product: 'Fertilizers',
      batchNo: 'Batch 2025',
      mfgExp: '20/03/2025 - 20/01/2027',
      quantity: '100kg',
      hsnCode: '12548712',
      uploadFile: 'https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg'
    },
    {
      grnNo: 'GRN-20250423-002',
      date: '21/04/2025',
      factory: 'India',
      product: 'Pesticides',
      batchNo: 'Batch 159',
      mfgExp: '15/04/2025 - 20/12/2027',
      quantity: '90kg',
      hsnCode: '12548712',
      uploadFile: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg'
    },
    {
      grnNo: 'GRN-20250423-003',
      date: '22/04/2025',
      factory: 'India',
      product: 'Fertilizers',
      batchNo: 'Batch 9853',
      mfgExp: '28/05/2025 - 20/11/2027',
      quantity: '50kg',
      hsnCode: '12548712',
      uploadFile: 'https://images.pexels.com/photos/2132168/pexels-photo-2132168.jpeg'
    },
    {
      grnNo: 'GRN-20250423-055',
      date: '23/04/2025',
      factory: 'India',
      product: 'Metalers',
      batchNo: 'Batch 2458',
      mfgExp: '18/06/2025 - 20/08/2027',
      quantity: '45kg',
      hsnCode: '12548712',
      uploadFile: 'https://images.pexels.com/photos/2132172/pexels-photo-2132172.jpeg'
    }
  ];

  get inventoryItems(): InventoryItem[] {
    if (!this.searchTerm) return this._allInventoryItems;
    
    const searchTermLower = this.searchTerm.toLowerCase();
    return this._allInventoryItems.filter(item => 
      Object.values(item).some(value => 
        value.toString().toLowerCase().includes(searchTermLower)
      )
    );
  }
}