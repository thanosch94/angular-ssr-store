import { Component, ViewChild } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SidebarAllModule, SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { Category } from '../../interfaces/category';
import { CategoriesComponent } from '../../pages/categories/categories.component';
import { HeaderComponent } from '../../pages/header/header.component';
import { CookieConsentComponent } from './cookie-consent/cookie-consent.component';

@Component({
  selector: 'app-storefront-layout',
  imports: [HeaderComponent, RouterOutlet, SidebarAllModule, CategoriesComponent, CookieConsentComponent],
  templateUrl: './storefront-layout.component.html',
  styleUrl: './storefront-layout.component.scss',
})
export class StorefrontLayoutComponent {
  @ViewChild('sidebar') sidebar?: SidebarComponent;

  constructor(private router: Router) {}

  onCategorySelection(category: Category) {
    this.router.navigate(['/products-list/'], {
      queryParams: {
        categoryId: category.Id.toString(),
        categoryName: category.Name,
      },
    });
  }

  onToggleSidebar() {
    this.sidebar?.toggle();
  }

  onCreated() {
    if (this.sidebar) {
      this.sidebar.isOpen = false;
      this.sidebar.element.style.visibility = '';
    }
  }
}
