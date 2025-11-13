import { Routes } from '@angular/router';
import { SingleProductPageComponent } from './pages/single-product-page/single-product-page.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';

export const routes: Routes = [
    { path: 'product/:sku', component: SingleProductPageComponent },
    { path: 'products-list', component: ProductsListComponent },

];
