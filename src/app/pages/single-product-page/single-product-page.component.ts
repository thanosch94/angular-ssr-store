import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-single-product-page',
  imports:[BreadcrumbComponent],
  templateUrl: './single-product-page.component.html',
  styleUrls: ['./single-product-page.component.scss']
})
export class SingleProductPageComponent implements OnInit {
  sku: string;

  constructor(private route: ActivatedRoute) {
    this.sku = this.route.snapshot.paramMap.get('sku') ?? '';

  }

  ngOnInit() {
  }


}
