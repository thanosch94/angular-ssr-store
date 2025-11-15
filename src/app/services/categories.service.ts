import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
categories: Category[] = [
    {
      Id: 1,
      Name: 'Έπιπλα',
      Icon: 'fa-couch',
      Subcategories: [
        { Id: 11, Name: 'Καθίσματα' },
        { Id: 12, Name: 'Τραπέζια' },
        { Id: 13, Name: 'Κρεβάτια' },
        { Id: 14, Name: 'Ντουλάπες' }
      ]
    },
    {
      Id: 2,
      Name: 'Φωτιστικά',
      Icon: 'fa-lightbulb',
      Subcategories: [
        { Id: 21, Name: 'Επιτραπέζια' },
        { Id: 22, Name: 'Δαπέδου' },
        { Id: 23, Name: 'Οροφής' }
      ]
    },
    {
      Id: 3,
      Name: 'Διακόσμηση',
      Icon: 'fa-paint-brush',
      Subcategories: [
        { Id: 31, Name: 'Καθρέπτες' },
        { Id: 32, Name: 'Κορνίζες' },
        { Id: 33, Name: 'Ρολόγια' }
      ]
    },
    {
      Id: 4,
      Name: 'Κήπος',
      Icon: 'fa-tree',
      Subcategories: [
        { Id: 41, Name: 'Έπιπλα εξωτερικού χώρου' },
        { Id: 42, Name: 'Φωτιστικά κήπου' }
      ]
    }
  ];
  constructor() { }

    public GetAll() {
      return of(this.categories);
    }

}
