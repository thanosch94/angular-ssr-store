import { Component, EventEmitter, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Category } from '../../interfaces/category';
import { CategoriesService } from '../../services/categories.service';
import { AsyncPipe } from '@angular/common';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  imports:[FontAwesomeModule, AsyncPipe],
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  @Output() CategorySelected = new EventEmitter<string>();

  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  categories:Observable<Category[]>=of([]);

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit(){
    this.getData();
  }

  getData(){
    this.categories = this.categoriesService.GetAll();
  }
  ToggleExpand(category: Category) {
    category.Expanded = !category.Expanded;
  }

  SelectCategory(categoryName: string) {
    this.CategorySelected.emit(categoryName);
  }
}
