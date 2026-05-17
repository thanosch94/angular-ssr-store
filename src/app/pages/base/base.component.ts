import { Component, OnInit, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Metadata } from '../../interfaces/metadata';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent {
  private title = inject(Title);
  private meta = inject(Meta);

  protected setMetaData(meta:Metadata){
    this.title.setTitle(meta.Title + ' | All for Home');

    if(meta.Description){
      this.meta.addTag({
        name: 'description',
        content: this.truncate(meta.Description,130)
      }, true);
    }

      this.meta.addTag({
        property: 'og:title',
        content: meta.Title + ' | All for Home'
      }, true);

      if(meta.Description){
        this.meta.addTag({
          property: 'og:description',
          content: this.truncate(meta.Description,130)
        }, true);
      }

      this.meta.addTag({
        property: 'og:image',
        content: meta.Image
      }, true);

      if(meta.ProductUrl){
        this.meta.addTag({
          property: 'og:url',
          content: meta.ProductUrl??''
        }, true);
      }
  }

  protected truncate(text: string, maxLength: number): string {
    if (!text) return '';

    if (text.length <= maxLength) return text;

    const trimmed = text.substring(0, maxLength);

    return trimmed.substring(0, trimmed.lastIndexOf(' ')) + '...';
  }
}


// {
//   "@context": "https://schema.org/",
//   "@type": "Product",
//   "name": "Modern Sofa",
//   "image": "https://yourdomain.com/image.jpg",
//   "description": "Comfortable modern sofa for living room",
//   "offers": {
//     "@type": "Offer",
//     "price": "299.99",
//     "priceCurrency": "EUR",
//     "availability": "https://schema.org/InStock",
//     "url": "https://yourdomain.com/product/modern-sofa-123",
//     "seller": {
//       "@type": "Organization",
//       "name": "HomeDesign",
//       "url": "https://homedesign.com"
//     }
//   }
// }
