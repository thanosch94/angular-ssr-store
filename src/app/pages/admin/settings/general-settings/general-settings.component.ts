import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule, SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';

@Component({
  selector: 'app-general-settings',
  imports: [FormsModule, ButtonModule, DropDownListModule, SwitchModule, TextBoxModule],
  templateUrl: './general-settings.component.html',
  styleUrl: './general-settings.component.css',
})
export class GeneralSettingsComponent {
  websiteName = 'AffiliatePro';
  websiteSubtitle = 'Οι καλύτερες προσφορές, αξιολογήσεις και οδηγοί για έξυπνες αγορές';
  websiteUrl = 'https://affiliatepro.gr';
  contactEmail = 'info@affiliatepro.gr';
  language = 'el';
  timezone = 'athens';
  dateFormat = 'ddmmyyyy';
  timeFormat = '24h';
  analyticsRange = 'last7';
  compareRange = 'previous';
  maintenanceMode = false;
  userRegistration = true;
  commentsEnabled = true;

  readonly languageOptions = [
    { text: 'Ελληνικά', value: 'el' },
    { text: 'English', value: 'en' },
  ];

  readonly timezoneOptions = [
    { text: '(UTC+02:00) Athens, Bucharest, Istanbul', value: 'athens' },
    { text: '(UTC+01:00) Brussels, Copenhagen, Madrid, Paris', value: 'paris' },
    { text: '(UTC+00:00) Dublin, Edinburgh, Lisbon, London', value: 'london' },
  ];

  readonly dateFormatOptions = [
    { text: 'DD/MM/YYYY (31/12/2024)', value: 'ddmmyyyy' },
    { text: 'MM/DD/YYYY (12/31/2024)', value: 'mmddyyyy' },
    { text: 'YYYY-MM-DD (2024-12-31)', value: 'yyyymmdd' },
  ];

  readonly timeFormatOptions = [
    { text: '24 ώρες (14:30)', value: '24h' },
    { text: '12 ώρες (2:30 PM)', value: '12h' },
  ];

  readonly analyticsRangeOptions = [
    { text: 'Σήμερα', value: 'today' },
    { text: 'Χθες', value: 'yesterday' },
    { text: 'Τελευταίες 7 ημέρες', value: 'last7' },
    { text: 'Τελευταίες 30 ημέρες', value: 'last30' },
    { text: 'Τρέχων μήνας', value: 'currentMonth' },
    { text: 'Προηγούμενος μήνας', value: 'previousMonth' },
    { text: 'Προσαρμοσμένο εύρος...', value: 'custom' },
  ];

  readonly compareRangeOptions = [
    { text: 'Προηγούμενη αντίστοιχη περίοδος', value: 'previous' },
    { text: 'Προηγούμενο έτος', value: 'previousYear' },
    { text: 'Χωρίς σύγκριση', value: 'none' },
  ];
}
