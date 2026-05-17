import { Product } from './../../interfaces/product';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule, SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginatorComponent } from "../paginator/paginator.component";
import { ListOptions } from '../../interfaces/list-options';
import { AppOptions } from '../../base/app-options';
import { Category } from '../../interfaces/category';
import { OptionsList } from '../../interfaces/options-list';
import { CategoriesService } from '../../services/categories.service';
import { BaseComponent } from '../base/base.component';

type ViewMode = 'grid' | 'comfortable';
type SortOption = 'recommended' | 'priceAsc' | 'priceDesc' | 'discount';

interface CategoryFilterOption {
  id: string;
  name: string;
}

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  imports: [
    CommonModule,
    CurrencyPipe,
    FormsModule,
    ButtonModule,
    DropDownListModule,
    NumericTextBoxModule,
    SwitchModule,
    PaginatorComponent,
  ],
})
export class ProductsListComponent extends BaseComponent implements OnInit {
  products: Product[] = [];
  displayedProducts: Product[] = [];
  categories: CategoryFilterOption[] = [];
  listOptions: ListOptions = new ListOptions();
  totalPages = 1;
  displayPages = 5;
  searchTerm = '';
  selectedCategoryId = 'all';
  selectedSort: SortOption = 'recommended';
  minPrice?: number;
  maxPrice?: number;
  favoritesOnly = false;
  viewMode: ViewMode = 'grid';
  isLoading = false;
  totalResults = 0;

  readonly sortOptions: { value: SortOption; label: string }[] = [
    { value: 'recommended', label: 'Προτεινόμενα' },
    { value: 'priceAsc', label: 'Χαμηλότερη τιμή' },
    { value: 'priceDesc', label: 'Υψηλότερη τιμή' },
    { value: 'discount', label: 'Μεγαλύτερη έκπτωση' },
  ];

  readonly categoryFields = { text: 'name', value: 'id' };
  readonly sortFields = { text: 'label', value: 'value' };

  constructor(
    private productsService: ProductsService,
    private categoriesService: CategoriesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    super();
    this.activatedRoute.queryParams.subscribe(params => {
      this.searchTerm = params['searchInput'] ?? '';
      this.selectedCategoryId = params['categoryId'] ?? 'all';
      this.listOptions.PageNumber = 1;
      this.getData();
    });
  }

  ngOnInit() {
    this.loadCategories();
   // this.getData();
  }

  setListOptions() {
    AppOptions.productsListOptions.PagingEnabled = true;
    AppOptions.productsListOptions.ItemsPerPage = 24;
    AppOptions.productsListOptions.PageNumber = this.listOptions.PageNumber ?? 1;
    AppOptions.productsListOptions.SearchText = this.searchTerm.trim();
    AppOptions.productsListOptions.CategoryId = this.selectedCategoryId === 'all' ? undefined : this.selectedCategoryId as any;
    AppOptions.productsListOptions.MinPrice = this.minPrice;
    AppOptions.productsListOptions.MaxPrice = this.maxPrice;
  }

  getData() {
    this.setListOptions();
    this.isLoading = true;

    this.productsService.GetAllWithOptions().subscribe((data: OptionsList<Product>) => {
      this.totalPages = data.TotalPages;
      this.displayPages = Math.min(this.totalPages, 5);
      this.products = data.List;
      this.totalResults = data.List.length;
      this.refreshDisplayedProducts();
      this.isLoading = false;
    });
  }

  onPageChange(pageNumber: number) {
    this.listOptions.PageNumber = pageNumber;
    this.getData();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onFilterChange() {
    this.listOptions.PageNumber = 1;
    this.getData();
  }

  refreshDisplayedProducts() {
    let result = [...this.products];

    if (this.favoritesOnly) {
      result = result.filter(product => product.IsFavorite);
    }

    result.sort((first, second) => {
      switch (this.selectedSort) {
        case 'priceAsc':
          return this.getEffectivePrice(first) - this.getEffectivePrice(second);
        case 'priceDesc':
          return this.getEffectivePrice(second) - this.getEffectivePrice(first);
        case 'discount':
          return this.getDiscountPercent(second) - this.getDiscountPercent(first);
        default:
          return 0;
      }
    });

    this.displayedProducts = result;
  }

  clearFilters() {
    this.searchTerm = '';
    this.selectedCategoryId = 'all';
    this.selectedSort = 'recommended';
    this.minPrice = undefined;
    this.maxPrice = undefined;
    this.favoritesOnly = false;
    this.onFilterChange();
  }

  selectCategory(categoryId: string) {
    this.selectedCategoryId = categoryId;
    this.onFilterChange();
  }

  setSort(sort: SortOption) {
    this.selectedSort = sort;
    this.refreshDisplayedProducts();
  }

  toggleFavoritesOnly() {
    this.favoritesOnly = !this.favoritesOnly;
    this.refreshDisplayedProducts();
  }

  toggleFavorite(product: Product, event: Event) {
    event.stopPropagation();
    product.IsFavorite = !product.IsFavorite;
    this.refreshDisplayedProducts();
  }

  viewProduct(product: Product) {
    this.router.navigate(['/product', product.Id.toString()]);
  }

  getEffectivePrice(product: Product): number {
    return product.DiscountPrice && product.DiscountPrice < product.Price
      ? product.DiscountPrice
      : product.Price;
  }

  getDiscountPercent(product: Product): number {
    if (!product.DiscountPrice || product.DiscountPrice >= product.Price) {
      return 0;
    }

    return Math.round(((product.Price - product.DiscountPrice) / product.Price) * 100);
  }

  getActiveFilterCount(): number {
    return [
      this.searchTerm.trim(),
      this.selectedCategoryId !== 'all',
      this.minPrice !== undefined,
      this.maxPrice !== undefined,
      this.favoritesOnly,
    ].filter(Boolean).length;
  }

  getSelectedCategoryName(): string {
    return this.categories.find(category => category.id === this.selectedCategoryId)?.name ?? 'Όλες οι κατηγορίες';
  }

  private loadCategories() {
    this.categoriesService.GetAll().subscribe(categories => {
      this.categories = [
        { id: 'all', name: 'Όλα' },
        ...this.flattenCategories(categories),
      ];
    });
  }

  private flattenCategories(categories: Category[]): CategoryFilterOption[] {
    return categories.flatMap(category => [
      { id: category.Id.toString(), name: category.Name },
      ...(category.Subcategories ? this.flattenCategories(category.Subcategories) : []),
    ]);
  }
}
