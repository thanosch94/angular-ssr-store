import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { CurrencyPipe } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  imports:[CurrencyPipe, RouterModule, FontAwesomeModule],
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  solidHeart = solidHeart;
  regularHeart = regularHeart;
  constructor(private router: Router) {}

  viewProduct() {
    this.router.navigate(['/products', this.product.Id]);
  }

  ngOnInit() {
  }

  toggleFavorite(event: Event) {
    event.stopPropagation();
    this.product.IsFavorite = !this.product.IsFavorite;
  }
}
