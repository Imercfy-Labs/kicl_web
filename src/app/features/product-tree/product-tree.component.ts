import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../../shared/components/layout/layout.component';

@Component({
  selector: 'app-product-tree',
  templateUrl: './product-tree.component.html',
  styleUrls: ['./product-tree.component.scss'],
  standalone: true,
  imports: [CommonModule, LayoutComponent]
})
export class ProductTreeComponent implements OnInit {
  products: any[] = [];
  selectedTree: any = null;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        console.log("✅ Products fetched from API:", data); // 👈 This will show the product list in console
        this.products = data;
        if (this.products.length > 0) {
          this.selectedTree = this.products[0]; // Default selection
        }
      },
      error: (err) => {
        console.error("❌ Failed to fetch products:", err); // 👈 Logs any error in console
      }
    });
  }
  selectTree(tree: any) {
    this.selectedTree = tree;
  }
}
