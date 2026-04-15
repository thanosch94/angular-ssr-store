import { Product } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { FiltersBarComponent } from '../filters-bar/filters-bar.component';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginatorComponent } from "../paginator/paginator.component";
import { ListOptions } from '../../interfaces/list-options';
import { AppOptions } from '../../base/app-options';
import { Category } from '../../interfaces/category';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  imports: [ProductItemComponent, FiltersBarComponent, PaginatorComponent],
})
export class ProductsListComponent implements OnInit {
  searchInput?: string;
  products: Product[] = [];
  listOptions: ListOptions = new ListOptions();
  totalPages: number = 10;
  category?: Category;
  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.searchInput = params['searchInput'];
      this.category = params['category'];
      this.setListOptions();
      this.getData();
    });
  }

  ngOnInit() {
    this.setListOptions();
    this.getData();
  }

  setListOptions(){
    AppOptions.productsListOptions.PagingEnabled = true;
    AppOptions.productsListOptions.ItemsPerPage = 20;
    AppOptions.productsListOptions.PageNumber = 1;
    AppOptions.productsListOptions.SearchText = this.searchInput??"";
    AppOptions.productsListOptions.CategoryId = this.category?.Id;
  }

  getData() {
    this.productsService.GetAllWithOptions().subscribe((data: Product[]) => {
      this.products = data;
    })
  }

  onPageChange(pageNumber: number) {
    AppOptions.productsListOptions.PageNumber = pageNumber;
    this.listOptions.PageNumber = AppOptions.productsListOptions.PageNumber
    this.getData();
     window.scrollTo({ top: 0, behavior: 'smooth' });

  }

  onProductClick(product: Product) {
  }
}
