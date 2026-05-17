import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule, SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';

interface SelectOption {
  text: string;
  value: string;
}

interface MetricOption {
  label: string;
  iconClass: string;
  enabled: boolean;
}

@Component({
  selector: 'app-analytics-settings',
  imports: [CommonModule, FormsModule, ButtonModule, SwitchModule, DropDownListModule, NumericTextBoxModule],
  templateUrl: './analytics-settings.component.html',
  styleUrl: './analytics-settings.component.css',
})
export class AnalyticsSettingsComponent {
  dateRange = 'last7';
  timezone = 'athens';
  compareRange = 'previous';
  currency = 'eur';
  autoRefresh = true;
  realTime = false;
  hideZeroValues = true;
  primaryGrouping = 'day';
  secondaryGrouping = 'none';
  maxRows = 50;
  retention = '13months';
  aggregation = 'hourly';
  exportFormat = 'csv';
  exportLimit = 10000;
  includeCharts = true;

  readonly fields = { text: 'text', value: 'value' };

  readonly dateRangeOptions: SelectOption[] = [
    { text: 'Σήμερα', value: 'today' },
    { text: 'Χθες', value: 'yesterday' },
    { text: 'Τελευταίες 7 ημέρες', value: 'last7' },
    { text: 'Τελευταίες 30 ημέρες', value: 'last30' },
  ];

  readonly timezoneOptions: SelectOption[] = [
    { text: '(UTC+02:00) Athens, Bucharest, Istanbul', value: 'athens' },
    { text: '(UTC+01:00) Brussels, Copenhagen, Madrid, Paris', value: 'paris' },
    { text: '(UTC+00:00) Dublin, Edinburgh, Lisbon, London', value: 'london' },
  ];

  readonly compareOptions: SelectOption[] = [
    { text: 'Προηγούμενη αντίστοιχη περίοδο', value: 'previous' },
    { text: 'Προηγούμενο έτος', value: 'previousYear' },
    { text: 'Χωρίς σύγκριση', value: 'none' },
  ];

  readonly currencyOptions: SelectOption[] = [
    { text: 'EUR (€) - Ευρώ', value: 'eur' },
    { text: 'USD ($) - Δολάριο', value: 'usd' },
    { text: 'GBP (£) - Λίρα', value: 'gbp' },
  ];

  readonly groupingOptions: SelectOption[] = [
    { text: 'Ημέρα', value: 'day' },
    { text: 'Εβδομάδα', value: 'week' },
    { text: 'Μήνας', value: 'month' },
  ];

  readonly secondaryGroupingOptions: SelectOption[] = [
    { text: 'Καμία', value: 'none' },
    { text: 'Κατηγορία', value: 'category' },
    { text: 'Κατάστημα', value: 'store' },
  ];

  readonly retentionOptions: SelectOption[] = [
    { text: '6 μήνες', value: '6months' },
    { text: '13 μήνες', value: '13months' },
    { text: '24 μήνες', value: '24months' },
  ];

  readonly aggregationOptions: SelectOption[] = [
    { text: 'Κάθε 15 λεπτά', value: '15min' },
    { text: 'Κάθε 1 ώρα', value: 'hourly' },
    { text: 'Κάθε ημέρα', value: 'daily' },
  ];

  readonly exportFormatOptions: SelectOption[] = [
    { text: 'CSV', value: 'csv' },
    { text: 'Excel', value: 'excel' },
    { text: 'PDF', value: 'pdf' },
  ];

  metrics: MetricOption[] = [
    { label: 'Προβολές (Views)', iconClass: 'e-eye', enabled: true },
    { label: 'Κλικ (Clicks)', iconClass: 'e-view-side', enabled: true },
    { label: 'Παραγγελίες (Orders)', iconClass: 'e-order', enabled: true },
    { label: 'Έσοδα (Revenue)', iconClass: 'e-export-csv', enabled: true },
    { label: 'Ποσοστό Μετατροπής (CR)', iconClass: 'e-chart', enabled: true },
    { label: 'Νέοι Χρήστες (New Users)', iconClass: 'e-user', enabled: true },
    { label: 'Επιστροφές (Refunds)', iconClass: 'e-undo', enabled: true },
    { label: 'Μέση Αξία Παραγγελίας (AOV)', iconClass: 'e-date-time', enabled: true },
    { label: 'Ενεργοί Συνεργάτες (Active Affiliates)', iconClass: 'e-group-1', enabled: true },
  ];

  resetDefaults(): void {
    this.metrics = this.metrics.map(metric => ({ ...metric, enabled: true }));
  }
}
