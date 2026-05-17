import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule, CheckBoxModule, SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

interface SelectOption {
  text: string;
  value: string;
}

@Component({
  selector: 'app-security-settings',
  imports: [FormsModule, ButtonModule, CheckBoxModule, SwitchModule, DropDownListModule],
  templateUrl: './security-settings.component.html',
  styleUrl: './security-settings.component.css',
})
export class SecuritySettingsComponent {
  sessionDuration = '60';
  idleTimeout = '30';
  rememberDevice = true;
  logoutWarning = true;
  require2fa = true;
  methodTotp = true;
  methodSms = true;
  methodEmail = false;
  passwordLength = '8';
  requireLowercase = true;
  requireUppercase = true;
  requireNumber = true;
  requireSpecial = true;
  passwordExpiry = '90';
  passwordHistory = '5';
  failedAttempts = '5';
  lockDuration = '15';
  logFailedAttempts = true;
  captchaLogin = true;
  restrictByIp = false;
  newConnectionAlerts = true;
  securityActivityLog = true;
  logRetention = '12';
  criticalEmailAlerts = true;

  readonly fields = { text: 'text', value: 'value' };

  readonly sessionOptions: SelectOption[] = [
    { text: '30 λεπτά', value: '30' },
    { text: '60 λεπτά', value: '60' },
    { text: '2 ώρες', value: '120' },
  ];

  readonly idleOptions: SelectOption[] = [
    { text: '15 λεπτά', value: '15' },
    { text: '30 λεπτά', value: '30' },
    { text: '60 λεπτά', value: '60' },
  ];

  readonly passwordLengthOptions: SelectOption[] = [
    { text: '8 χαρακτήρες', value: '8' },
    { text: '10 χαρακτήρες', value: '10' },
    { text: '12 χαρακτήρες', value: '12' },
  ];

  readonly passwordExpiryOptions: SelectOption[] = [
    { text: '30 ημέρες', value: '30' },
    { text: '90 ημέρες', value: '90' },
    { text: '180 ημέρες', value: '180' },
  ];

  readonly passwordHistoryOptions: SelectOption[] = [
    { text: '3 τελευταίοι κωδικοί', value: '3' },
    { text: '5 τελευταίοι κωδικοί', value: '5' },
    { text: '10 τελευταίοι κωδικοί', value: '10' },
  ];

  readonly failedAttemptsOptions: SelectOption[] = [
    { text: '3 προσπάθειες', value: '3' },
    { text: '5 προσπάθειες', value: '5' },
    { text: '10 προσπάθειες', value: '10' },
  ];

  readonly lockDurationOptions: SelectOption[] = [
    { text: '5 λεπτά', value: '5' },
    { text: '15 λεπτά', value: '15' },
    { text: '30 λεπτά', value: '30' },
  ];

  readonly retentionOptions: SelectOption[] = [
    { text: '6 μήνες', value: '6' },
    { text: '12 μήνες', value: '12' },
    { text: '24 μήνες', value: '24' },
  ];
}
