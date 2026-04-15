import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product';
import { DialogModule, DialogComponent } from '@syncfusion/ej2-angular-popups';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-single-product-page',
  imports:[BreadcrumbComponent, DialogModule, CommonModule, CurrencyPipe],
  templateUrl: './single-product-page.component.html',
  styleUrls: ['./single-product-page.component.scss']
})
export class SingleProductPageComponent implements OnInit {
  id: any;
  product:Product = {} as Product;
  activeTab: string = 'description';
  selectedImage: string = '';

  @ViewChild('imageDialog') imageDialog?: DialogComponent;

  constructor(private route: ActivatedRoute,
        private productsService: ProductsService

  ) {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    this.productsService.GetById(this.id).subscribe((data: Product) => {
      this.product=data;
      this.selectedImage = this.product.FeatureImageUrl;
      this.product.Images = []
      this.product.Images.push(this.product.FeatureImageUrl); // Ensure feature image is included in the gallery
      this.product.Images.push("https://b.scdn.gr/images/sku_main_images/021870/21870438/fixedratio_20250918175501_camper_peu_cami_andrika_anatomika_sneakers_mayra_k100249_012.jpeg"); // Ensure feature image is included in the gallery
    });
  }

  ngOnInit() {
  }

  openImageDialog() {
    if (this.imageDialog) {
      this.imageDialog.show();
    }
  }

  onBuyClick(event: Event) {
    // href on the anchor will handle navigation, but we can intercept for analytics or to prevent
    // opening when URL is missing
    if (!this.product?.AffiliateUrl) {
      event.preventDefault();
      return;
    }
    // optionally track click here
    // e.g. this.analytics.track('ProductAffiliateClick', { productId: this.product.Id });
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
