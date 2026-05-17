import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ImportSetting } from '../interfaces/import-setting';
import { Product } from '../interfaces/product';
import { ListOptions } from '../interfaces/list-options';
import { AppOptions } from '../base/app-options';
import { Guid } from 'guid-typescript';
import { OptionsList } from '../interfaces/options-list';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
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
    return this.http.get<Product[]>(this.service + 'Products/getall', {
      params: this.createListParams(AppOptions.productsListOptions),
      headers: this.auth.getHeaders(),
    });
  }

  public GetAllWithOptions() {
    return this.http.get<OptionsList<Product>>(
      this.service + 'Products/getallwithoptions',
      {
        params: this.createListParams(AppOptions.productsListOptions),
        headers: this.auth.getHeaders(),
        withCredentials: true
      }
    );
  }

  public GetById(id: Guid) {
    return this.http.get<Product>(
      this.service + 'Products/getById/' + id,
      {
        params: this.createListParams(AppOptions.productsListOptions),
        headers: this.auth.getHeaders(),
        withCredentials: true
      }
    );
  }

  public Update(product: Product) {
    return this.http.put<Product>(
      this.service + 'Products/update',
      product,
      {
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

  private createListParams(options: ListOptions): HttpParams {
    let params = new HttpParams();

    Object.entries(options).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        params = params.set(key, value.toString());
      }
    });

    return params;
  }
}
