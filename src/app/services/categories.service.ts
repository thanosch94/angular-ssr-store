import { Guid } from 'guid-typescript';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
categories: Category[] = [
    {
      Id: Guid.parse("789d5309-96bd-4c27-a6e8-f78bb2638fc5"),
      Name: 'Έπιπλα',
      Icon: 'fa-couch',
      Subcategories: [
        { Id: Guid.parse("14ffe761-7891-4fcb-8a63-f60283fd84f8"), Name: 'Καθίσματα' },
        { Id: Guid.parse("bbe3f995-e095-4696-914f-4cb976b161d2"), Name: 'Τραπέζια' },
        { Id: Guid.parse("3e81d879-3b1b-444f-9618-a41bb81a12f8"), Name: 'Κρεβάτια' },
        { Id: Guid.parse("415e8f09-95b7-43fa-9d0c-86882032cf79"), Name: 'Ντουλάπες' }
      ]
    },
    {
      Id: Guid.parse("b012b555-079c-4296-9d58-f1efd57b7f5d"),
      Name: 'Φωτιστικά',
      Icon: 'fa-lightbulb',
      Subcategories: [
        { Id: Guid.parse("a62b2219-6a87-432a-a60d-b8b370b5caf2"), Name: 'Επιτραπέζια' },
        { Id: Guid.parse("a9233983-b66f-44e2-b17e-1dc5b9e50ea1"), Name: 'Δαπέδου' },
        { Id: Guid.parse("00a92af0-968a-4461-acea-c192b8c09980"), Name: 'Οροφής' }
      ]
    },
    {
      Id: Guid.parse("9f2c7aa2-c262-4820-be93-bd96d405b908"),
      Name: 'Διακόσμηση',
      Icon: 'fa-paint-brush',
      Subcategories: [
        { Id: Guid.parse("ef99c108-eb7e-44c4-8706-a018ac57a5c5"), Name: 'Καθρέπτες' },
        { Id: Guid.parse("024ef2e1-db70-45ae-b6a8-e50eecab50d0"), Name: 'Κορνίζες' },
        { Id: Guid.parse("3ce860e2-e410-4cc2-9cc7-dd8c42eb8489"), Name: 'Ρολόγια' }
      ]
    },
    {
      Id: Guid.parse("f9705391-ef2f-40d0-9752-e2d041cda786"),
      Name: 'Κήπος',
      Icon: 'fa-tree',
      Subcategories: [
        { Id: Guid.parse("419211b5-c7a0-4810-92f2-004707776b3c"), Name: 'Έπιπλα εξωτερικού χώρου' },
        { Id: Guid.parse("fa638864-adf2-4313-ad4f-bc4c55077688"), Name: 'Φωτιστικά κήπου' }
      ]
    }
  ];
  constructor() { }

    public GetAll() {
      return of(this.categories);
    }

}
