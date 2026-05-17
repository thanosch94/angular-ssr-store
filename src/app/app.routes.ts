import { Routes } from '@angular/router';
import { SingleProductPageComponent } from './pages/single-product-page/single-product-page.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductsGridListComponent } from './pages/admin/products-grid-list/products-grid-list.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ArticlesListComponent } from './pages/admin/articles-list/articles-list.component';
import { ImportsComponent } from './pages/admin/imports/imports.component';
import { ProductEditComponent } from './pages/admin/product-edit/product-edit.component';
import { SettingsComponent } from './pages/admin/settings/settings.component';
import { StoresListComponent } from './pages/admin/stores-list/stores-list.component';
import { ShopEditComponent } from './pages/admin/shop-edit/shop-edit.component';
import { CategoriesListComponent } from './pages/admin/categories-list/categories-list.component';
import { CategoryEditComponent } from './pages/admin/category-edit/category-edit.component';
import { UsersListComponent } from './pages/admin/users-list/users-list.component';
import { UserEditComponent } from './pages/admin/user-edit/user-edit.component';
import { LogsListComponent } from './pages/admin/logs-list/logs-list.component';
import { productResolver } from './resolvers/products.resolver';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'product/:id', component: SingleProductPageComponent,
      resolve: {
                  product: productResolver
                }
    },
    { path: 'products-list', component: ProductsListComponent },
    { path: 'admin', component: DashboardComponent },
    { path: 'admin/articles', component: ArticlesListComponent },
    { path: 'admin/products', component: ProductsGridListComponent },
    { path: 'admin/stores', component: StoresListComponent },
    { path: 'admin/stores/:id/edit', component: ShopEditComponent },
    { path: 'admin/categories', component: CategoriesListComponent },
    { path: 'admin/categories/:id/edit', component: CategoryEditComponent },
    { path: 'admin/users', component: UsersListComponent },
    { path: 'admin/users/:id/edit', component: UserEditComponent },
    { path: 'admin/logs', component: LogsListComponent },
    { path: 'admin/product-edit/:id', component: ProductEditComponent },
    { path: 'admin/imports', component: ImportsComponent },
    { path: 'admin/settings', component: SettingsComponent },
    { path: 'imports', redirectTo: 'admin/imports', pathMatch: 'full' },

];
