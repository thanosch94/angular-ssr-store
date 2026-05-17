import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule, CheckBoxModule, SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';

interface SelectOption {
  text: string;
  value: string;
}

interface NotificationRule {
  iconClass: string;
  title: string;
  description: string;
  email: boolean;
  browser: boolean;
  digest: boolean;
}

@Component({
  selector: 'app-notifications-settings',
  imports: [CommonModule, FormsModule, ButtonModule, CheckBoxModule, SwitchModule, DropDownListModule, TextBoxModule],
  templateUrl: './notifications-settings.component.html',
  styleUrl: './notifications-settings.component.css',
})
export class NotificationsSettingsComponent {
  emailEnabled = true;
  browserEnabled = true;
  digestFrequency = 'daily';
  digestTime = '09:00';
  quietHours = true;
  quietFrom = '22:00';
  quietTo = '08:00';
  testEmail = 'admin@affiliatepro.gr';

  readonly fields = { text: 'text', value: 'value' };

  readonly frequencyOptions: SelectOption[] = [
    { text: 'Άμεσα', value: 'instant' },
    { text: 'Καθημερινά', value: 'daily' },
    { text: 'Εβδομαδιαία', value: 'weekly' },
  ];

  readonly timeOptions: SelectOption[] = [
    { text: '08:00', value: '08:00' },
    { text: '09:00', value: '09:00' },
    { text: '22:00', value: '22:00' },
  ];

  rules: NotificationRule[] = [
    { iconClass: 'e-user', title: 'Νέοι Χρήστες', description: 'Ειδοποίηση όταν εγγράφεται ένας νέος χρήστης', email: true, browser: true, digest: true },
    { iconClass: 'e-group-1', title: 'Νέοι Συνεργάτες (Affiliates)', description: 'Ειδοποίηση για νέες εγγραφές συνεργατών', email: true, browser: true, digest: true },
    { iconClass: 'e-order', title: 'Νέες Παραγγελίες', description: 'Ειδοποίηση για νέες παραγγελίες', email: true, browser: true, digest: true },
    { iconClass: 'e-circle-check', title: 'Πληρωμές (Payouts)', description: 'Ειδοποίηση για ολοκληρωμένες ή αποτυχημένες πληρωμές', email: true, browser: true, digest: true },
    { iconClass: 'e-date-time', title: 'Υψηλές Προμήθειες', description: 'Ειδοποίηση για προμήθειες που ξεπερνούν το όριο', email: true, browser: true, digest: true },
    { iconClass: 'e-warning', title: 'Σφάλματα Συστήματος', description: 'Σημαντικά σφάλματα και προβλήματα συστήματος', email: true, browser: true, digest: true },
    { iconClass: 'e-refresh', title: 'Ενημερώσεις Συστήματος', description: 'Νέες εκδόσεις και ενημερώσεις', email: true, browser: true, digest: false },
  ];
}
