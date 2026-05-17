import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface HomeCard {
  title: string;
  subtitle?: string;
  image: string;
}

interface HomeProduct extends HomeCard {
  store: string;
  price: number;
  rating: string;
}

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, CurrencyPipe, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  readonly shops = ['Nordic House', 'Urban Nest', 'Casa Living', 'Loft & Light', 'Home Edit'];

  readonly categories: HomeCard[] = [
    { title: 'Σαλόνι', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=420&q=80' },
    { title: 'Κουζίνα', image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=420&q=80' },
    { title: 'Υπνοδωμάτιο', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=420&q=80' },
    { title: 'Μπάνιο', image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=420&q=80' },
    { title: 'Διακόσμηση', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=420&q=80' },
  ];

  readonly products: HomeProduct[] = [
    { title: 'Πολυθρόνα Lounge Verde', store: 'Nordic House', price: 349, rating: '4.8', image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=420&q=80' },
    { title: 'Τραπέζι Σαλονιού Oak', store: 'Urban Nest', price: 199, rating: '4.7', image: 'https://images.unsplash.com/photo-1532372320572-cda25653a694?auto=format&fit=crop&w=420&q=80' },
    { title: 'Κεραμικό Βάζο Terra', store: 'Casa Living', price: 49.9, rating: '4.9', image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=420&q=80' },
    { title: 'Επιτραπέζιο Φωτιστικό Glow', store: 'Loft & Light', price: 89, rating: '4.6', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=420&q=80' },
  ];

  readonly inspirations: HomeCard[] = [
    { title: 'Minimal Living', subtitle: 'Καθαρότητα & ισορροπία', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=520&q=80' },
    { title: 'Warm Kitchen', subtitle: 'Ζεστασιά & λειτουργικότητα', image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=520&q=80' },
    { title: 'Cozy Bedroom', subtitle: 'Άνεση & χαλάρωση', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=520&q=80' },
    { title: 'Modern Bathroom', subtitle: 'Στυλ & ευεξία', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=520&q=80' },
  ];
}
