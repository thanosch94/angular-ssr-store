import { Component, OnInit, output } from '@angular/core';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { FormsModule } from '@angular/forms';
import { Filters } from '../../interfaces/filters';

@Component({
  selector: 'filters-bar',
  templateUrl: './filters-bar.component.html',
  imports: [
    DropDownListModule,
    NumericTextBoxModule,
    ButtonModule,
    FormsModule,
  ],
  styleUrls: ['./filters-bar.component.css'],
})
export class FiltersBarComponent {
  filtersChange = output<Filters>()

  constructor() {}
  categories = ['All', 'Scarf', 'Beanie', 'Hat', 'Sweater'];

  filters:Filters = {
    SearchText: '',
    Category: 'All',
    MinPrice:undefined,
    MaxPrice: undefined,
    FavoritesOnly: false,
  };

  applyFilters() {
    debugger
    this.filtersChange.emit(this.filters);
  }
}
