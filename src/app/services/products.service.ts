import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: any[] = [
    {
      Id: Guid.parse('5d442339-528a-45fc-9595-15a6c13652c7'),
      Name: 'Handmade Wool Sweater',
      Description: 'Warm and soft winter sweater made from 100% wool.',
      Price: 89.99,
      ImageUrl:
        'https://www.homesweethome.gr/media/catalog/product/cache/e0ec88829fb05fc7e7c9c60de78d84d8/3/5/35154.jpg',
    },
    {
      Id: Guid.parse('a3c1e1f4-2b6e-4f3b-9c3d-8f4e2b5c6d7e'),
      Name: 'Crochet Scarf',
      Description: 'Elegant handmade scarf perfect for chilly days.',
      Price: 39.99,
      ImageUrl:
        'https://www.homesweethome.gr/media/catalog/product/cache/e0ec88829fb05fc7e7c9c60de78d84d8/3/3/330846.png',
    },
    {
      Id: Guid.parse('f7e8d9c0-1a2b-3c4d-5e6f-7a8b9c0d1e2f'),
      Name: 'Knitted Beanie',
      Description: 'Cozy beanie made from natural fibers.',
      Price: 24.99,
      ImageUrl:
        'https://www.homesweethome.gr/media/catalog/product/cache/e0ec88829fb05fc7e7c9c60de78d84d8/3/5/35160.jpg',
    },
    {
      Id: Guid.parse('5d442339-528a-45fc-9595-15a6c13652c7'),
      Name: 'Knitted Beanie',
      Description: 'Cozy beanie made from natural fibers.',
      Price: 24.99,
      ImageUrl:
        'https://www.homesweethome.gr/media/catalog/product/cache/e0ec88829fb05fc7e7c9c60de78d84d8/3/5/35160.jpg',
    },
    {
      Id: Guid.parse('5d442339-528a-45fc-9595-15a6c13652c7'),
      Name: 'Handmade Wool Sweater',
      Description: 'Warm and soft winter sweater made from 100% wool.',
      Price: 89.99,
      ImageUrl:
        'https://www.homesweethome.gr/media/catalog/product/cache/e0ec88829fb05fc7e7c9c60de78d84d8/3/5/35154.jpg',
    },
    {
      Id: Guid.parse('a3c1e1f4-2b6e-4f3b-9c3d-8f4e2b5c6d7e'),
      Name: 'Crochet Scarf',
      Description: 'Elegant handmade scarf perfect for chilly days.',
      Price: 39.99,
      ImageUrl:
        'https://www.homesweethome.gr/media/catalog/product/cache/e0ec88829fb05fc7e7c9c60de78d84d8/3/3/330846.png',
    },
    {
      Id: Guid.parse('5d442339-528a-45fc-9595-15a6c13652c7'),
      Name: 'Handmade Wool Sweater',
      Description: 'Warm and soft winter sweater made from 100% wool.',
      Price: 89.99,
      ImageUrl:
        'https://www.homesweethome.gr/media/catalog/product/cache/e0ec88829fb05fc7e7c9c60de78d84d8/3/5/35154.jpg',
    },
    {
      Id: Guid.parse('a3c1e1f4-2b6e-4f3b-9c3d-8f4e2b5c6d7e'),
      Name: 'Crochet Scarf',
      Description: 'Elegant handmade scarf perfect for chilly days.',
      Price: 39.99,
      ImageUrl:
        'https://www.homesweethome.gr/media/catalog/product/cache/e0ec88829fb05fc7e7c9c60de78d84d8/3/3/330846.png',
    },
    {
      Id: Guid.parse('5d442339-528a-45fc-9595-15a6c13652c7'),
      Name: 'Knitted Beanie',
      Description: 'Cozy beanie made from natural fibers.',
      Price: 24.99,
      ImageUrl:
        'https://www.homesweethome.gr/media/catalog/product/cache/e0ec88829fb05fc7e7c9c60de78d84d8/3/5/35160.jpg',
    },
  ];
  constructor() {}

  public GetAll() {
    return of(this.products);
  }

  public GetById(id: Guid) {
    let product = this.products.find((p) => p.Id === id);
    return of(product);
  }

  public GetProductsBySearchInput(input:string) {
    let products = this.products.filter((p) => p.Name.toLowerCase().includes(input.toLowerCase())|| p.Description?.toLowerCase().includes(input.toLowerCase()));
    return of(products);
  }
}
