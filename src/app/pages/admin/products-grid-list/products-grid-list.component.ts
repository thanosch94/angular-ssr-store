import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule, CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { GridModule, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { TooltipModule } from '@syncfusion/ej2-angular-popups';
import { Product } from '../../../interfaces/product';
import { ProductsService } from '../../../services/products.service';

type ProductStatus = 'published' | 'draft' | 'inactive';

interface StatusOption {
  text: string;
  value: ProductStatus | 'all';
}

interface ProductListRow extends Product {
  listIndex: number;
  category: string;
  status: ProductStatus;
  statusLabel: string;
  clicks: number;
  lastUpdated: string;
}

@Component({
  selector: 'app-products-grid-list',
  templateUrl: './products-grid-list.component.html',
  imports: [
    CommonModule,
    FormsModule,
    CurrencyPipe,
    ButtonModule,
    CheckBoxModule,
    DropDownListModule,
    GridModule,
    TextBoxModule,
    TooltipModule,
  ],
  styleUrls: ['./products-grid-list.component.css']
})
export class ProductsGridListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: ProductListRow[] = [];
  pagedProducts: ProductListRow[] = [];
  searchTerm = '';
  selectedCategory = 'all';
  selectedStatus: ProductStatus | 'all' = 'all';
  selectedStore = 'all';
  currentPage = 1;
  pageSize = 10;
  totalPages = 1;
  visiblePages: number[] = [1];
  publishedCount = 0;
  draftCount = 0;
  inactiveCount = 0;
  readonly gridSelectionSettings: SelectionSettingsModel = { type: 'Multiple', mode: 'Row', checkboxOnly: false };

  readonly categoryOptions = [
    { text: 'Όλες οι Κατηγορίες', value: 'all' },
    { text: 'Κινητά Τηλέφωνα', value: 'Κινητά Τηλέφωνα' },
    { text: 'Laptops', value: 'Laptops' },
    { text: 'Ακουστικά', value: 'Ακουστικά' },
    { text: 'Smartwatches', value: 'Smartwatches' },
    { text: 'Κάμερες', value: 'Κάμερες' },
  ];

  readonly statusOptions: StatusOption[] = [
    { text: 'Όλες οι Καταστάσεις', value: 'all' },
    { text: 'Δημοσιευμένο', value: 'published' },
    { text: 'Προσχέδιο', value: 'draft' },
    { text: 'Ανενεργό', value: 'inactive' },
  ];

  readonly storeOptions = [
    { text: 'Όλα τα Καταστήματα', value: 'all' },
    { text: 'AffiliatePro', value: 'affiliatepro' },
    { text: 'Partner Store', value: 'partner-store' },
  ];

  readonly pageSizeOptions = [
    { text: '10 ανά σελίδα', value: 10 },
    { text: '25 ανά σελίδα', value: 25 },
    { text: '50 ανά σελίδα', value: 50 },
  ];

  constructor(private productsService: ProductsService, private router: Router) {}

  ngOnInit(): void {
    this.getData();
  }

  private productRows: ProductListRow[] = [];

  private createProductRows(products: Product[]): ProductListRow[] {
    return products.map((product, index) => {
      const status = this.getProductStatus(product, index);

      return {
        ...product,
        listIndex: index,
        category: this.getProductCategory(product, index),
        status,
        statusLabel: this.getStatusLabel(status),
        clicks: this.getClicks(index),
        lastUpdated: this.getLastUpdated(index),
      };
    });
  }

  private refreshDerivedData(): void {
    const search = this.searchTerm.trim().toLowerCase();

    this.filteredProducts = this.productRows.filter(product => {
      const matchesSearch = !search ||
        product.Name?.toLowerCase().includes(search) ||
        product.Sku?.toLowerCase().includes(search);
      const matchesCategory = this.selectedCategory === 'all' || product.category === this.selectedCategory;
      const matchesStatus = this.selectedStatus === 'all' || product.status === this.selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });

    this.totalPages = Math.max(1, Math.ceil(this.filteredProducts.length / this.pageSize));
    this.currentPage = Math.min(Math.max(this.currentPage, 1), this.totalPages);
    this.visiblePages = Array.from({ length: this.totalPages }, (_, index) => index + 1).slice(0, 5);

    const start = (this.currentPage - 1) * this.pageSize;
    this.pagedProducts = this.filteredProducts.slice(start, start + this.pageSize);
  }

  getData() {
    this.productsService.GetAll().subscribe(products => {
      this.products = products;
      this.productRows = this.createProductRows(products);
      this.publishedCount = this.productRows.filter(product => product.status === 'published').length;
      this.draftCount = this.productRows.filter(product => product.status === 'draft').length;
      this.inactiveCount = this.productRows.filter(product => product.status === 'inactive').length;
      this.currentPage = 1;
      this.refreshDerivedData();
    });
  }

  onFilterChange() {
    this.currentPage = 1;
    this.refreshDerivedData();
  }

  clearFilters() {
    this.searchTerm = '';
    this.selectedCategory = 'all';
    this.selectedStatus = 'all';
    this.selectedStore = 'all';
    this.currentPage = 1;
    this.refreshDerivedData();
  }

  goToPage(page: number) {
    this.currentPage = Math.min(Math.max(page, 1), this.totalPages);
    this.refreshDerivedData();
  }

  editProduct(product: Product) {
    this.router.navigate(['/admin/product-edit', product.Id.toString()]);
  }

  viewProduct(product: Product) {
    this.router.navigate(['/product', product.Id.toString()]);
  }

  getProductCategory(product: Product, index: number): string {
    const categories = ['Κινητά Τηλέφωνα', 'Laptops', 'Ακουστικά', 'Smartwatches', 'Κάμερες', 'Οθόνες', 'Ηχεία', 'Tablets'];
    return categories[index % categories.length];
  }

  getProductStatus(product: Product, index: number): ProductStatus {
    if (!product.FeatureImageUrl) {
      return 'inactive';
    }

    if (!product.AffiliateUrl && index % 5 === 0) {
      return 'draft';
    }

    return index % 11 === 0 ? 'inactive' : 'published';
  }

  getStatusLabel(status: ProductStatus): string {
    return {
      published: 'Δημοσιευμένο',
      draft: 'Προσχέδιο',
      inactive: 'Ανενεργό',
    }[status];
  }

  getClicks(index: number): number {
    return [1245, 987, 876, 654, 0, 1102, 342, 0, 589, 421][index % 10];
  }

  getLastUpdated(index: number): string {
    const day = Math.max(1, 20 - index).toString().padStart(2, '0');
    const hour = (8 + index).toString().padStart(2, '0');
    return `${day}/05/2024 ${hour}:32`;
  }
}
