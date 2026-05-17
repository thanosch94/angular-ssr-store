import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

interface AdminNavItem {
  label: string;
  route: string;
  iconClass: string;
  exact?: boolean;
}

interface AdminNavGroup {
  title: string;
  items: AdminNavItem[];
}

@Component({
  selector: 'app-admin-layout',
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss',
})
export class AdminLayoutComponent {
  isCollapsed = false;

  readonly navGroups: AdminNavGroup[] = [
    {
      title: 'Γενικά',
      items: [
        { label: 'Dashboard', route: '/admin', iconClass: 'e-home', exact: true },
        { label: 'Analytics', route: '/admin/analytics', iconClass: 'e-chart' },
        { label: 'Καταστήματα', route: '/admin/stores', iconClass: 'e-building-block' },
      ],
    },
    {
      title: 'Περιεχόμενο',
      items: [
        { label: 'Άρθρα', route: '/admin/articles', iconClass: 'e-file-document' },
        { label: 'Προϊόντα', route: '/admin/products', iconClass: 'e-order' },
        { label: 'Κατηγορίες', route: '/admin/categories', iconClass: 'e-folder' },
      ],
    },
    {
      title: 'Affiliate',
      items: [
        { label: 'Affiliate Links', route: '/admin/affiliate-links', iconClass: 'e-link' },
        { label: 'Imports', route: '/admin/imports', iconClass: 'e-import' },
      ],
    },
    {
      title: 'Marketing',
      items: [
        { label: 'Banners', route: '/admin/banners', iconClass: 'e-image' },
        { label: 'SEO Tools', route: '/admin/seo-tools', iconClass: 'e-filter-main' },
      ],
    },
    {
      title: 'Σύστημα',
      items: [
        { label: 'Ρυθμίσεις', route: '/admin/settings', iconClass: 'e-settings' },
        { label: 'Χρήστες', route: '/admin/users', iconClass: 'e-user' },
        { label: 'Logs', route: '/admin/logs', iconClass: 'e-file-document' },
      ],
    },
  ];

  toggleSidenav(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
