import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule, SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { NumericTextBoxModule, TextAreaModule, TextBoxModule } from '@syncfusion/ej2-angular-inputs';

@Component({
  selector: 'app-shop-edit',
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    SwitchModule,
    DropDownListModule,
    NumericTextBoxModule,
    TextBoxModule,
    TextAreaModule,
  ],
  templateUrl: './shop-edit.component.html',
  styleUrl: './shop-edit.component.css',
})
export class ShopEditComponent {
  shopName = 'Amazon';
  websiteUrl = 'https://www.amazon.com';
  category = 'electronics';
  status = 'active';
  program = 'amazon';
  minCommission = 1;
  maxCommission = 10;
  currency = 'usd';
  description = 'Το Amazon Associates είναι το επίσημο πρόγραμμα συνεργασίας της Amazon που σας επιτρέπει να κερδίζετε προμήθειες διαφημίζοντας εκατομμύρια προϊόντα.';
  trackingParameter = 'tag';
  trackingValue = 'affiliatepro-20';
  nofollowLinks = true;
  openNewWindow = true;

  readonly fields = { text: 'text', value: 'value' };

  readonly statusOptions = [
    { text: 'Ενεργό', value: 'active' },
    { text: 'Ανενεργό', value: 'inactive' },
  ];

  readonly categoryOptions = [
    { text: 'Ηλεκτρονικά', value: 'electronics' },
    { text: 'Μόδα', value: 'fashion' },
    { text: 'Ταξίδια', value: 'travel' },
    { text: 'Σπίτι & Κήπος', value: 'home' },
  ];

  readonly programOptions = [
    { text: 'Amazon Associates', value: 'amazon' },
    { text: 'Awin', value: 'awin' },
    { text: 'Partner Network', value: 'partner' },
  ];

  readonly currencyOptions = [
    { text: 'USD - Δολάριο ΗΠΑ', value: 'usd' },
    { text: 'EUR - Ευρώ', value: 'eur' },
    { text: 'GBP - Λίρα Αγγλίας', value: 'gbp' },
  ];
}
