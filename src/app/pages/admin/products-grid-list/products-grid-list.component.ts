import { Component, OnInit } from '@angular/core';
import {
  CommandColumnService,
  ExcelExportService,
  FilterService,
  GridModule,
  GroupService,
  PageService,
  PageSettingsModel,
  SortService,
  ToolbarService,
} from '@syncfusion/ej2-angular-grids';
import { ProductsService } from '../../../services/products.service';
import { Observable } from 'rxjs';
import { Product } from '../../../interfaces/product';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-products-grid-list',
  templateUrl: './products-grid-list.component.html',
  imports: [GridModule, AsyncPipe],
  providers: [
    CommandColumnService,
    PageService,
    SortService,
    FilterService,
    GroupService,
  ],
  styleUrls: ['./products-grid-list.component.css'],
})
export class ProductsGridListComponent implements OnInit {
  columns: any[] = [];
  products: Observable<Product[]> = new Observable<Product[]>();
  pageSettings?: PageSettingsModel;

  constructor(private productsService: ProductsService) {
    this.pageSettings = { pageSize: 5 };
  }

  ngOnInit(): void {
    this.getData();
    // Example columns
    this.columns = [
      { Field: 'Id', HeaderText: 'Id', Width: 50 },
      { Field: 'FeatureImageUrl', HeaderText: 'Image', Width: 150 },

      { Field: 'Name', HeaderText: 'Name', Width: 150 },
      {
        Field: 'Price',
        HeaderText: 'Price',
        Width: 120,
      },
      {
        Field: 'DiscountPrice',
        HeaderText: 'Discount',
        Width: 120,
      },

      {
        HeaderText: 'Actions',
        Width: 120,
        Commands: [{ buttonOption: { content: 'Edit', cssClass: 'e-flat' } }],
      },
    ];

    // TODO: Load products from API
    // this.products = ...;
  }

  getData() {
    this.products = this.productsService.GetAll();
    debugger;
  }

  public onCommandClick(args: any): void {
    // if (args.commandColumn?.type === 'button') {
    // const product: Product = args.rowData;
    // this.router.navigate(['/products/edit', product.id]);
  }
}
