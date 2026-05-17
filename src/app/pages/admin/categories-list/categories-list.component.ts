import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { GridModule, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';

type CategoryStatus = 'active' | 'inactive';

interface CategoryItem {
  id: number;
  name: string;
  slug: string;
  parent: string;
  articles: number;
  products: number;
  status: CategoryStatus;
  updated: string;
  iconClass: string;
  tone: string;
}

@Component({
  selector: 'app-categories-list',
  imports: [CommonModule, FormsModule, ButtonModule, DropDownListModule, GridModule, TextBoxModule],
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.css',
})
export class CategoriesListComponent {
  searchTerm = '';
  selectedParent = 'all';
  selectedStatus: CategoryStatus | 'all' = 'all';
  filteredCategories: CategoryItem[] = [];
  pageSize = 20;
  readonly gridSelectionSettings: SelectionSettingsModel = { type: 'Single', mode: 'Row' };

  readonly parentOptions = [
    { text: 'Όλες οι Κατηγορίες', value: 'all' },
    { text: 'Τεχνολογία', value: 'Τεχνολογία' },
    { text: 'Σπίτι & Κήπος', value: 'Σπίτι & Κήπος' },
    { text: 'Χωρίς γονική', value: 'none' },
  ];

  readonly statusOptions = [
    { text: 'Κατάσταση: Όλες', value: 'all' },
    { text: 'Ενεργή', value: 'active' },
    { text: 'Ανενεργή', value: 'inactive' },
  ];

  readonly pageSizeOptions = [
    { text: '20 ανά σελίδα', value: 20 },
    { text: '50 ανά σελίδα', value: 50 },
    { text: '100 ανά σελίδα', value: 100 },
  ];

  readonly categories: CategoryItem[] = [
    { id: 1, name: 'Τεχνολογία', slug: 'technology', parent: '-', articles: 54, products: 128, status: 'active', updated: '15/05/2024 10:30', iconClass: 'e-display', tone: 'purple' },
    { id: 2, name: 'Κινητά & Tablets', slug: 'phones-tablets', parent: 'Τεχνολογία', articles: 23, products: 56, status: 'active', updated: '15/05/2024 09:15', iconClass: 'e-table', tone: 'blue' },
    { id: 3, name: 'Laptops', slug: 'laptops', parent: 'Τεχνολογία', articles: 18, products: 42, status: 'active', updated: '14/05/2024 22:45', iconClass: 'e-display', tone: 'green' },
    { id: 4, name: 'Ήχος & Ακουστικά', slug: 'audio', parent: 'Τεχνολογία', articles: 16, products: 38, status: 'active', updated: '14/05/2024 16:20', iconClass: 'e-circle', tone: 'orange' },
    { id: 5, name: 'Φωτογραφία', slug: 'photography', parent: 'Τεχνολογία', articles: 12, products: 27, status: 'active', updated: '14/05/2024 11:05', iconClass: 'e-image', tone: 'pink' },
    { id: 6, name: 'Gaming', slug: 'gaming', parent: 'Τεχνολογία', articles: 20, products: 51, status: 'active', updated: '13/05/2024 18:40', iconClass: 'e-grid-view', tone: 'violet' },
    { id: 7, name: 'Σπίτι & Κήπος', slug: 'home-garden', parent: '-', articles: 31, products: 74, status: 'active', updated: '13/05/2024 14:10', iconClass: 'e-home', tone: 'green' },
    { id: 8, name: 'Κουζίνα', slug: 'kitchen', parent: 'Σπίτι & Κήπος', articles: 10, products: 22, status: 'active', updated: '12/05/2024 21:30', iconClass: 'e-cell', tone: 'yellow' },
    { id: 9, name: 'Έπιπλα', slug: 'furniture', parent: 'Σπίτι & Κήπος', articles: 8, products: 18, status: 'inactive', updated: '12/05/2024 17:25', iconClass: 'e-table', tone: 'cyan' },
    { id: 10, name: 'Μόδα', slug: 'fashion', parent: '-', articles: 47, products: 93, status: 'active', updated: '12/05/2024 10:50', iconClass: 'e-user', tone: 'red' },
    { id: 11, name: 'Ομορφιά & Υγεία', slug: 'beauty-health', parent: '-', articles: 29, products: 61, status: 'active', updated: '11/05/2024 20:15', iconClass: 'e-circle-check', tone: 'pink' },
    { id: 12, name: 'Αθλητισμός', slug: 'sports', parent: '-', articles: 22, products: 45, status: 'active', updated: '10/05/2024 13:30', iconClass: 'e-circle-info', tone: 'blue' },
    { id: 13, name: 'Ταξίδια', slug: 'travel', parent: '-', articles: 15, products: 31, status: 'active', updated: '10/05/2024 11:45', iconClass: 'e-send-1', tone: 'yellow' },
    { id: 14, name: 'Διάφορα', slug: 'miscellaneous', parent: '-', articles: 9, products: 16, status: 'active', updated: '09/05/2024 16:20', iconClass: 'e-more-horizontal-1', tone: 'gray' },
  ];

  constructor(private router: Router) {
    this.refreshFilteredCategories();
  }

  refreshFilteredCategories(): void {
    const search = this.searchTerm.trim().toLowerCase();

    this.filteredCategories = this.categories.filter(category => {
      const matchesSearch = !search ||
        category.name.toLowerCase().includes(search) ||
        category.slug.toLowerCase().includes(search);
      const matchesParent = this.selectedParent === 'all' ||
        (this.selectedParent === 'none' ? category.parent === '-' : category.parent === this.selectedParent);
      const matchesStatus = this.selectedStatus === 'all' || category.status === this.selectedStatus;

      return matchesSearch && matchesParent && matchesStatus;
    });
  }

  getStatusLabel(status: CategoryStatus): string {
    return status === 'active' ? 'Ενεργή' : 'Ανενεργή';
  }

  editCategory(category: CategoryItem): void {
    this.router.navigate(['/admin/categories', category.id, 'edit']);
  }
}
