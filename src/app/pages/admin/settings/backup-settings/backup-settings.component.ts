import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule, SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

interface SelectOption {
  text: string;
  value: string;
}

interface BackupRow {
  date: string;
  source: string;
  type: string;
  details: string;
  size: string;
  storage: string;
  offsite: boolean;
}

@Component({
  selector: 'app-backup-settings',
  imports: [CommonModule, FormsModule, ButtonModule, SwitchModule, DropDownListModule],
  templateUrl: './backup-settings.component.html',
  styleUrl: './backup-settings.component.css',
})
export class BackupSettingsComponent {
  backupFrequency = 'daily';
  executionTime = '02:00';
  retention = '30';
  databaseBackup = true;
  fileBackup = true;
  compression = true;
  offsiteStorage = false;

  readonly fields = { text: 'text', value: 'value' };

  readonly frequencyOptions: SelectOption[] = [
    { text: 'Καθημερινά', value: 'daily' },
    { text: 'Εβδομαδιαία', value: 'weekly' },
    { text: 'Μηνιαία', value: 'monthly' },
  ];

  readonly timeOptions: SelectOption[] = [
    { text: '01:00', value: '01:00' },
    { text: '02:00', value: '02:00' },
    { text: '03:00', value: '03:00' },
  ];

  readonly retentionOptions: SelectOption[] = [
    { text: '15 ημέρες', value: '15' },
    { text: '30 ημέρες', value: '30' },
    { text: '90 ημέρες', value: '90' },
  ];

  readonly backups: BackupRow[] = [
    { date: '15/05/2024 - 03:15', source: 'Χειροκίνητο', type: 'Πλήρες Backup', details: 'Βάση δεδομένων + Αρχεία', size: '1.24 GB', storage: 'Τοπικός Server', offsite: false },
    { date: '14/05/2024 - 02:00', source: 'Αυτόματο', type: 'Πλήρες Backup', details: 'Βάση δεδομένων + Αρχεία', size: '1.18 GB', storage: 'Τοπικός Server, Off-site', offsite: true },
    { date: '13/05/2024 - 02:00', source: 'Αυτόματο', type: 'Πλήρες Backup', details: 'Βάση δεδομένων + Αρχεία', size: '1.17 GB', storage: 'Τοπικός Server, Off-site', offsite: true },
    { date: '12/05/2024 - 02:00', source: 'Αυτόματο', type: 'Πλήρες Backup', details: 'Βάση δεδομένων + Αρχεία', size: '1.16 GB', storage: 'Τοπικός Server, Off-site', offsite: true },
    { date: '11/05/2024 - 02:00', source: 'Αυτόματο', type: 'Πλήρες Backup', details: 'Βάση δεδομένων + Αρχεία', size: '1.15 GB', storage: 'Τοπικός Server', offsite: false },
  ];
}
