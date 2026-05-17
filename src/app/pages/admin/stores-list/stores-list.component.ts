import { CommonModule, DecimalPipe } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { GridModule, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';

type StoreStatus = 'active' | 'inactive';

interface StoreItem {
  id: number;
  name: string;
  domain: string;
  category: string;
  program: string;
  commission: string;
  clicks: number;
  trend: number;
  status: StoreStatus;
  updated: string;
  logoText: string;
  logoClass: string;
}

@Component({
  selector: 'app-stores-list',
  imports: [CommonModule, FormsModule, DecimalPipe, ButtonModule, DropDownListModule, GridModule, TextBoxModule],
  templateUrl: './stores-list.component.html',
  styleUrl: './stores-list.component.css',
})
export class StoresListComponent {
  searchTerm = '';
  selectedCategory = 'all';
  selectedStatus: StoreStatus | 'all' = 'all';
  filteredStores: StoreItem[] = [];
  pageSize = 10;
  openMenuId = 0;
  menuTop = 0;
  menuLeft = 0;
  readonly gridSelectionSettings: SelectionSettingsModel = { type: 'Single', mode: 'Row' };
  private menuTrigger?: HTMLElement;

  constructor(private router: Router) {
    this.refreshFilteredStores();
  }

  readonly categoryOptions = [
    { text: 'Όλες οι Κατηγορίες', value: 'all' },
    { text: 'Ηλεκτρονικά', value: 'Ηλεκτρονικά' },
    { text: 'Μόδα', value: 'Μόδα' },
    { text: 'Ταξίδια', value: 'Ταξίδια' },
  ];

  readonly statusOptions = [
    { text: 'Κατάσταση: Όλες', value: 'all' },
    { text: 'Ενεργό', value: 'active' },
    { text: 'Ανενεργό', value: 'inactive' },
  ];

  readonly pageSizeOptions = [
    { text: '10 ανά σελίδα', value: 10 },
    { text: '25 ανά σελίδα', value: 25 },
    { text: '50 ανά σελίδα', value: 50 },
  ];

  readonly stores: StoreItem[] = [
    { id: 1, name: 'Amazon', domain: 'amazon.com', category: 'Ηλεκτρονικά', program: 'Amazon Associates', commission: '1% - 10%', clicks: 18742, trend: 18.4, status: 'active', updated: '15/05/2024 10:30', logoText: 'a', logoClass: 'amazon' },
    { id: 2, name: 'Skroutz', domain: 'skroutz.gr', category: 'Ηλεκτρονικά', program: 'Skroutz Partner', commission: '2% - 8%', clicks: 11289, trend: 15.7, status: 'active', updated: '15/05/2024 09:15', logoText: 'S', logoClass: 'skroutz' },
    { id: 3, name: 'Public', domain: 'public.gr', category: 'Ηλεκτρονικά', program: 'Public Affiliate', commission: '2% - 6%', clicks: 7632, trend: 12.9, status: 'active', updated: '14/05/2024 22:45', logoText: 'P', logoClass: 'public' },
    { id: 4, name: 'MediaMarkt', domain: 'mediamarkt.gr', category: 'Ηλεκτρονικά', program: 'MediaMarkt Affiliate', commission: '1% - 5%', clicks: 5214, trend: 10.4, status: 'active', updated: '14/05/2024 16:20', logoText: 'MM', logoClass: 'media' },
    { id: 5, name: 'Cosmote', domain: 'cosmote.gr', category: 'Τηλεπικοινωνίες', program: 'Cosmote Affiliate', commission: '3% - 7%', clicks: 4103, trend: 9.8, status: 'active', updated: '14/05/2024 11:05', logoText: 'C', logoClass: 'cosmote' },
    { id: 6, name: 'eShop', domain: 'eshop.gr', category: 'Γενικά', program: 'eShop Affiliate', commission: '2% - 6%', clicks: 3021, trend: 7.6, status: 'active', updated: '13/05/2024 18:40', logoText: 'e', logoClass: 'eshop' },
    { id: 7, name: 'Notos', domain: 'notos.gr', category: 'Μόδα', program: 'Notos Affiliate', commission: '3% - 8%', clicks: 2412, trend: 6.1, status: 'active', updated: '13/05/2024 14:10', logoText: 'N', logoClass: 'notos' },
    { id: 8, name: 'Zara', domain: 'zara.com', category: 'Μόδα', program: 'Awin (Zara)', commission: '2% - 7%', clicks: 1987, trend: -2.1, status: 'active', updated: '12/05/2024 21:30', logoText: 'ZARA', logoClass: 'zara' },
    { id: 9, name: 'IKEA', domain: 'ikea.com', category: 'Σπίτι & Κήπος', program: 'Awin (IKEA)', commission: '2% - 4%', clicks: 1612, trend: -3.5, status: 'active', updated: '12/05/2024 17:25', logoText: 'IKEA', logoClass: 'ikea' },
    { id: 10, name: 'Toys Center', domain: 'toyscenter.gr', category: 'Παιδιά & Παιχνίδια', program: 'Toys Center Affiliate', commission: '3% - 6%', clicks: 1321, trend: -4.2, status: 'active', updated: '12/05/2024 10:50', logoText: 'TC', logoClass: 'toys' },
    { id: 11, name: 'Booking.com', domain: 'booking.com', category: 'Ταξίδια', program: 'Booking.com Affiliate', commission: '25% - 40%', clicks: 982, trend: 5.2, status: 'active', updated: '11/05/2024 20:15', logoText: 'B.', logoClass: 'booking' },
    { id: 12, name: 'eBay', domain: 'ebay.com', category: 'Διάφορα', program: 'eBay Partner Network', commission: '1% - 4%', clicks: 754, trend: -1.3, status: 'inactive', updated: '10/05/2024 13:30', logoText: 'ebay', logoClass: 'ebay' },
  ];

  refreshFilteredStores(): void {
    const search = this.searchTerm.trim().toLowerCase();

    this.filteredStores = this.stores.filter(store => {
      const matchesSearch = !search || store.name.toLowerCase().includes(search) || store.domain.toLowerCase().includes(search);
      const matchesCategory = this.selectedCategory === 'all' || store.category === this.selectedCategory;
      const matchesStatus = this.selectedStatus === 'all' || store.status === this.selectedStatus;
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }

  toggleMenu(storeId: number, event: MouseEvent): void {
    if (this.openMenuId === storeId) {
      this.openMenuId = 0;
      this.menuTrigger = undefined;
      return;
    }

    this.menuTrigger = event.currentTarget as HTMLElement;
    this.updateMenuPosition();
    this.openMenuId = storeId;
  }

  @HostListener('window:scroll')
  @HostListener('window:resize')
  repositionOpenMenu(): void {
    if (this.openMenuId) {
      this.updateMenuPosition();
    }
  }

  private updateMenuPosition(): void {
    if (!this.menuTrigger) {
      return;
    }

    const trigger = this.menuTrigger;
    const rect = trigger.getBoundingClientRect();
    const menuWidth = 286;
    const menuHeight = 292;
    const gutter = 12;
    const opensDown = rect.bottom + menuHeight + gutter <= window.innerHeight;

    this.menuLeft = Math.max(gutter, Math.min(rect.right - menuWidth, window.innerWidth - menuWidth - gutter));
    this.menuTop = opensDown ? rect.bottom + 6 : Math.max(gutter, rect.top - menuHeight - 6);
  }

  resetFilters(): void {
    this.searchTerm = '';
    this.selectedCategory = 'all';
    this.selectedStatus = 'all';
    this.refreshFilteredStores();
  }

  editStore(store: StoreItem): void {
    this.router.navigate(['/admin/stores', store.id, 'edit']);
  }

  getStatusLabel(status: StoreStatus): string {
    return status === 'active' ? 'Ενεργό' : 'Ανενεργό';
  }
}
