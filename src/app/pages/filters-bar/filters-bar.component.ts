import { Component, OnInit } from '@angular/core';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { FormsModule } from '@angular/forms';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'filters-bar',
  templateUrl: './filters-bar.component.html',
  imports: [
    DropDownListModule,
    NumericTextBoxModule,
    ButtonModule,
    FormsModule,
  ],
  styleUrls: ['./filters-bar.component.css'],
})
export class FiltersBarComponent implements OnInit {
  constructor() {}
  categories = ['All', 'Scarf', 'Beanie', 'Hat', 'Sweater'];
  products = [
    /* your product list */
  ];

  filteredProducts = [...this.products];

  filters = {
    searchText: '',
    category: 'All',
    minPrice: null as number | null,
    maxPrice: null as number | null,
    favoritesOnly: false,
  };

  ngOnInit() {
    this.applyFilters();
  }

  applyFilters() {
    this.filteredProducts = this.products.filter((p: Product) => {
      const matchesSearch = p.Name.toLowerCase().includes(
        this.filters.searchText.toLowerCase()
      );

      const matchesCategory = this.filters.category === 'All';
      const matchesMinPrice =
        this.filters.minPrice === null || p.Price >= this.filters.minPrice;

      const matchesMaxPrice =
        this.filters.maxPrice === null || p.Price <= this.filters.maxPrice;

      const matchesFavorites = !this.filters.favoritesOnly || p.IsFavorite;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesMinPrice &&
        matchesMaxPrice &&
        matchesFavorites
      );
    });
  }
}
