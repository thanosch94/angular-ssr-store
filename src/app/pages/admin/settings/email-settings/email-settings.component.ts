import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule, SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { NumericTextBoxModule, TextBoxModule } from '@syncfusion/ej2-angular-inputs';

interface SelectOption {
  text: string;
  value: string;
}

@Component({
  selector: 'app-email-settings',
  imports: [FormsModule, ButtonModule, SwitchModule, DropDownListModule, NumericTextBoxModule, TextBoxModule],
  templateUrl: './email-settings.component.html',
  styleUrl: './email-settings.component.css',
})
export class EmailSettingsComponent {
  sendMethod = 'smtp';
  smtpHost = 'smtp.sendgrid.net';
  smtpPort = 587;
  encryption = 'tls';
  username = 'apikey';
  password = '••••••••••••••••';
  senderName = 'AffiliatePro';
  senderEmail = 'no-reply@affiliatepro.gr';
  replyTo = 'support@affiliatepro.gr';
  useDifferentReplyTo = false;
  enableSending = true;
  htmlEmail = true;
  saveCopies = false;
  logFailures = true;
  testRecipient = '';

  readonly fields = { text: 'text', value: 'value' };

  readonly sendMethodOptions: SelectOption[] = [
    { text: 'SMTP', value: 'smtp' },
    { text: 'SendGrid API', value: 'sendgrid' },
    { text: 'Mailgun API', value: 'mailgun' },
    { text: 'Amazon SES', value: 'ses' },
  ];

  readonly encryptionOptions: SelectOption[] = [
    { text: 'TLS', value: 'tls' },
    { text: 'SSL', value: 'ssl' },
    { text: 'Καμία', value: 'none' },
  ];
}
