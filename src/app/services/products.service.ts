import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ImportSetting } from '../interfaces/import-setting';
import { Product } from '../interfaces/product';
import { ListOptions } from '../interfaces/list-options';
import { AppOptions } from '../base/app-options';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  // products: any[] = [
  //   {
  //     Id: Guid.parse('5d442339-528a-45fc-9595-15a6c13652c7'),
  //     Name: 'Handmade Wool Sweater',
  //     Description: 'Warm and soft winter sweater made from 100% wool.',
  //     Price: 89.99,
  //     FeatureImageUrl:
  //       'https://www.homesweethome.gr/media/catalog/product/cache/e0ec88829fb05fc7e7c9c60de78d84d8/3/5/35154.jpg',
  //   },
  //   {
  //     Id: Guid.parse('a3c1e1f4-2b6e-4f3b-9c3d-8f4e2b5c6d7e'),
  //     Name: 'Crochet Scarf',
  //     Description: 'Elegant handmade scarf perfect for chilly days.',
  //     Price: 39.99,
  //     FeatureImageUrl:
  //       'https://www.homesweethome.gr/media/catalog/product/cache/e0ec88829fb05fc7e7c9c60de78d84d8/3/3/330846.png',
  //   },
  //   {
  //     Id: Guid.parse('f7e8d9c0-1a2b-3c4d-5e6f-7a8b9c0d1e2f'),
  //     Name: 'Knitted Beanie',
  //     Description: 'Cozy beanie made from natural fibers.',
  //     Price: 24.99,
  //     FeatureImageUrl:
  //       'https://www.homesweethome.gr/media/catalog/product/cache/e0ec88829fb05fc7e7c9c60de78d84d8/3/5/35160.jpg',
  //   },
  //   {
  //     Id: Guid.parse('5d442339-528a-45fc-9595-15a6c13652c7'),
  //     Name: 'Knitted Beanie',
  //     Description: 'Cozy beanie made from natural fibers.',
  //     Price: 24.99,
  //     FeatureImageUrl:
  //       'https://www.homesweethome.gr/media/catalog/product/cache/e0ec88829fb05fc7e7c9c60de78d84d8/3/5/35160.jpg',
  //   },
  //   {
  //     Id: Guid.parse('5d442339-528a-45fc-9595-15a6c13652c7'),
  //     Name: 'Handmade Wool Sweater',
  //     Description: 'Warm and soft winter sweater made from 100% wool.',
  //     Price: 89.99,
  //     FeatureImageUrl:
  //       'https://www.homesweethome.gr/media/catalog/product/cache/e0ec88829fb05fc7e7c9c60de78d84d8/3/5/35154.jpg',
  //   },
  //   {
  //     Id: Guid.parse('a3c1e1f4-2b6e-4f3b-9c3d-8f4e2b5c6d7e'),
  //     Name: 'Crochet Scarf',
  //     Description: 'Elegant handmade scarf perfect for chilly days.',
  //     Price: 39.99,
  //     FeatureImageUrl:
  //       'https://www.homesweethome.gr/media/catalog/product/cache/e0ec88829fb05fc7e7c9c60de78d84d8/3/3/330846.png',
  //   },
  //   {
  //     Id: Guid.parse('5d442339-528a-45fc-9595-15a6c13652c7'),
  //     Name: 'Handmade Wool Sweater',
  //     Description: 'Warm and soft winter sweater made from 100% wool.',
  //     Price: 89.99,
  //     FeatureImageUrl:
  //       'https://www.homesweethome.gr/media/catalog/product/cache/e0ec88829fb05fc7e7c9c60de78d84d8/3/5/35154.jpg',
  //   },
  //   {
  //     Id: Guid.parse('a3c1e1f4-2b6e-4f3b-9c3d-8f4e2b5c6d7e'),
  //     Name: 'Crochet Scarf',
  //     Description: 'Elegant handmade scarf perfect for chilly days.',
  //     Price: 39.99,
  //     FeatureImageUrl:
  //       'https://www.homesweethome.gr/media/catalog/product/cache/e0ec88829fb05fc7e7c9c60de78d84d8/3/3/330846.png',
  //   },
  //   {
  //     Id: Guid.parse('5d442339-528a-45fc-9595-15a6c13652c7'),
  //     Name: 'Knitted Beanie',
  //     Description: 'Cozy beanie made from natural fibers.',
  //     Price: 24.99,
  //     FeatureImageUrl:
  //       'https://www.homesweethome.gr/media/catalog/product/cache/e0ec88829fb05fc7e7c9c60de78d84d8/3/5/35160.jpg',
  //   },
  // ];
  service: string;

  constructor(private http: HttpClient, private auth: AuthService) {
    this.service = this.auth.getApiService();
  }

  public ExecuteImport(item: ImportSetting) {
    return this.http.post<ImportSetting>(
      this.service + 'Products/execute_import',
      item,
      {
        headers: this.auth.getHeaders(),
      }
    );
  }

  public GetAll() {
    debugger
    return this.http.get<Product[]>(this.service + 'Products/getall', {
      params:new HttpParams({ fromObject: AppOptions.productsListOptions as any }),
      headers: this.auth.getHeaders(),
    });
  }

  public GetAllWithOptions() {
    debugger
    return this.http.get<Product[]>(
      this.service + 'Products/getallwithoptions',
      {
        params:new HttpParams({ fromObject: AppOptions.productsListOptions as any }),
        headers: this.auth.getHeaders(),
      }
    );
  }

  public GetById(id: Guid) {
    return this.http.get<Product>(
      this.service + 'Products/getById/' + id,
      {
        params:new HttpParams({ fromObject: AppOptions.productsListOptions as any }),
        headers: this.auth.getHeaders(),
      }
    );
  }

  // public GetProductsBySearchInput(input: string) {
  //   let products = this.products.filter(
  //     (p) =>
  //       p.Name.toLowerCase().includes(input.toLowerCase()) ||
  //       p.Description?.toLowerCase().includes(input.toLowerCase())
  //   );
  //   return of(products);
  // }
}
