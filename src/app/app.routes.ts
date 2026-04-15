import { Routes } from '@angular/router';
import { SingleProductPageComponent } from './pages/single-product-page/single-product-page.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductsGridListComponent } from './pages/admin/products-grid-list/products-grid-list.component';
import { ImportsComponent } from './pages/admin/imports/imports.component';

export const routes: Routes = [
    { path: 'product/:id', component: SingleProductPageComponent },
    { path: 'products-list', component: ProductsListComponent },
    { path: 'admin', component: ProductsGridListComponent },
    { path: 'imports', component: ImportsComponent },

];
