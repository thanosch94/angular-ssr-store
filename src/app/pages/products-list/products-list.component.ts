import { Product } from './../../interfaces/product';
import { Component, effect, input, OnInit } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { FiltersBarComponent } from '../filters-bar/filters-bar.component';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  imports: [ProductItemComponent, FiltersBarComponent],
})
export class ProductsListComponent implements OnInit {
  searchInput?: string;
  products: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.searchInput = params['searchInput'];
          if (this.searchInput) {
      this.productsService
        .GetProductsBySearchInput(this.searchInput)
        .subscribe((data: Product[]) => {
          this.products = data;
        });
    } else {
      this.productsService.GetAll().subscribe((data: Product[]) => {
        this.products = data;
      }); }
    });
  }

  ngOnInit() {

  }

  onProductClick(product: Product) {
    this.productsService.GetById(product.Id).subscribe((data: Product) => {
      this.router.navigate(['/product/' + data.Id]);
    });
  }
}
