import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule, SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { TextAreaModule, TextBoxModule } from '@syncfusion/ej2-angular-inputs';

@Component({
  selector: 'app-category-edit',
  imports: [CommonModule, FormsModule, ButtonModule, SwitchModule, DropDownListModule, TextBoxModule, TextAreaModule],
  templateUrl: './category-edit.component.html',
  styleUrl: './category-edit.component.css',
})
export class CategoryEditComponent {
  categoryName = 'Τεχνολογία';
  slug = 'technology';
  parentCategory = 'none';
  isActive = true;
  seoTitle = 'Τεχνολογία - Άρθρα, Reviews & Οδηγοί';
  metaDescription = 'Ανακαλύψτε τα καλύτερα άρθρα, reviews και οδηγούς για τεχνολογικά προϊόντα, gadgets, λογισμικό και πολλά άλλα.';
  description = 'Η κατηγορία Τεχνολογία περιλαμβάνει άρθρα, reviews και οδηγούς για όλα τα τεχνολογικά προϊόντα και υπηρεσίες. Εδώ θα βρείτε πληροφορίες για smartphones, υπολογιστές, tablets, wearables, software και πολλά άλλα.';

  readonly fields = { text: 'text', value: 'value' };

  readonly parentOptions = [
    { text: '- Χωρίς γονική κατηγορία -', value: 'none' },
    { text: 'Τεχνολογία', value: 'technology' },
    { text: 'Σπίτι & Κήπος', value: 'home-garden' },
    { text: 'Μόδα', value: 'fashion' },
  ];
}
