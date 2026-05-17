import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';
import { Guid } from 'guid-typescript';

export const productResolver: ResolveFn<Product> = (route) => {
  const productsService = inject(ProductsService);

  const id = route.paramMap.get('id');

  if (!id) {
    throw new Error('Product ID is missing');
  }

  // id is string (GUID), perfectly fine
  return productsService.GetById(id as unknown as Guid);
};
