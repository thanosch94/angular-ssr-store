import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { StorefrontLayoutComponent } from './layouts/storefront-layout/storefront-layout.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, AdminLayoutComponent, StorefrontLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'All for home';
  isAdminArea = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.setAreaFromUrl(this.router.url);
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(event => this.setAreaFromUrl(event.urlAfterRedirects));
  }

  private setAreaFromUrl(url: string) {
    this.isAdminArea = url.startsWith('/admin');
  }
}
