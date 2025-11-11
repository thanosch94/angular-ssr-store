import { Routes } from '@angular/router';
import { SingleProductPageComponent } from './pages/single-product-page/single-product-page.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: 'product/:sku', component: SingleProductPageComponent },

];
