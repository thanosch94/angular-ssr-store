import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule, SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { GridModule, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';

type LogResult = 'success' | 'failed';

interface LogEntry {
  date: string;
  user: string;
  email: string;
  avatar: string;
  avatarTone: string;
  action: string;
  actionType: string;
  icon: string;
  iconTone: string;
  entity: string;
  details: string;
  ip: string;
  result: LogResult;
}

@Component({
  selector: 'app-logs-list',
  imports: [CommonModule, FormsModule, ButtonModule, SwitchModule, DropDownListModule, GridModule, TextBoxModule],
  templateUrl: './logs-list.component.html',
  styleUrl: './logs-list.component.css',
})
export class LogsListComponent {
  searchTerm = '';
  type = 'all';
  user = 'all';
  entity = 'all';
  result = 'all';
  filteredLogs: LogEntry[] = [];
  pageSize = 20;
  autoRefresh = true;
  readonly gridSelectionSettings: SelectionSettingsModel = { type: 'Single', mode: 'Row' };

  readonly typeOptions = [
    { text: 'Όλοι οι Τύποι', value: 'all' },
    { text: 'Δημιουργία', value: 'create' },
    { text: 'Ενημέρωση', value: 'update' },
    { text: 'Προβολή', value: 'view' },
    { text: 'Διαγραφή', value: 'delete' },
    { text: 'Σύνδεση', value: 'login' },
  ];

  readonly userOptions = [
    { text: 'Όλοι οι Χρήστες', value: 'all' },
    { text: 'Admin', value: 'Admin' },
    { text: 'Nikos', value: 'Nikos' },
    { text: 'Maria', value: 'Maria' },
    { text: 'System', value: 'System' },
  ];

  readonly entityOptions = [
    { text: 'Όλες οι Οντότητες', value: 'all' },
    { text: 'Προϊόν', value: 'Προϊόν' },
    { text: 'Άρθρο', value: 'Άρθρο' },
    { text: 'Κατηγορία', value: 'Κατηγορία' },
    { text: 'Σύστημα', value: 'Σύστημα' },
  ];

  readonly resultOptions = [
    { text: 'Όλα τα Αποτελέσματα', value: 'all' },
    { text: 'Επιτυχία', value: 'success' },
    { text: 'Αποτυχία', value: 'failed' },
  ];

  readonly pageSizeOptions = [
    { text: '20', value: 20 },
    { text: '50', value: 50 },
    { text: '100', value: 100 },
  ];

  readonly logs: LogEntry[] = [
    { date: '15/05/2024 10:30:15', user: 'Admin', email: 'admin@example.com', avatar: '', avatarTone: 'gray', action: 'Δημιουργία', actionType: 'Κατάστημα', icon: 'e-circle-add', iconTone: 'green', entity: 'Amazon', details: 'Δημιουργήθηκε νέο κατάστημα', ip: '192.168.1.10', result: 'success' },
    { date: '15/05/2024 10:15:42', user: 'Admin', email: 'admin@example.com', avatar: '', avatarTone: 'gray', action: 'Ενημέρωση', actionType: 'Προϊόν', icon: 'e-edit', iconTone: 'blue', entity: 'Samsung Galaxy S24', details: 'Ενημερώθηκαν οι πληροφορίες του προϊόντος', ip: '192.168.1.10', result: 'success' },
    { date: '15/05/2024 09:58:33', user: 'Nikos', email: 'nikos@example.com', avatar: 'N', avatarTone: 'teal', action: 'Προβολή', actionType: 'Άρθρο', icon: 'e-eye', iconTone: 'orange', entity: 'Οι καλύτερες κάμερες 2024', details: 'Προβολή άρθρου', ip: '192.168.1.25', result: 'success' },
    { date: '15/05/2024 09:45:21', user: 'Maria', email: 'maria@example.com', avatar: 'M', avatarTone: 'teal', action: 'Διαγραφή', actionType: 'Προϊόν', icon: 'e-trash', iconTone: 'purple', entity: 'iPhone 15 Pro', details: 'Διαγράφηκε το προϊόν', ip: '192.168.1.30', result: 'success' },
    { date: '15/05/2024 09:32:11', user: 'Admin', email: 'admin@example.com', avatar: '', avatarTone: 'gray', action: 'Σύνδεση', actionType: 'Σύστημα', icon: 'e-lock', iconTone: 'blue', entity: '-', details: 'Επιτυχής σύνδεση στο σύστημα', ip: '192.168.1.10', result: 'success' },
    { date: '15/05/2024 09:28:05', user: 'Admin', email: 'admin@example.com', avatar: '', avatarTone: 'gray', action: 'Αποτυχημένη Σύνδεση', actionType: 'Σύστημα', icon: 'e-lock', iconTone: 'red', entity: '-', details: 'Αποτυχημένη προσπάθεια σύνδεσης', ip: '203.0.113.45', result: 'failed' },
    { date: '15/05/2024 09:10:47', user: 'Kostas', email: 'kostas@example.com', avatar: 'K', avatarTone: 'indigo', action: 'Δημιουργία', actionType: 'Κατηγορία', icon: 'e-circle-add', iconTone: 'green', entity: 'Τεχνολογία', details: 'Δημιουργήθηκε νέα κατηγορία', ip: '192.168.1.22', result: 'success' },
    { date: '15/05/2024 08:55:19', user: 'Eleni', email: 'eleni@example.com', avatar: 'E', avatarTone: 'indigo', action: 'Ενημέρωση', actionType: 'Χρήστης', icon: 'e-edit', iconTone: 'blue', entity: 'Eleni (User ID: 12)', details: 'Ενημερώθηκαν τα στοιχεία χρήστη', ip: '192.168.1.31', result: 'success' },
    { date: '15/05/2024 08:40:33', user: 'Admin', email: 'admin@example.com', avatar: '', avatarTone: 'gray', action: 'Προβολή', actionType: 'Analytics', icon: 'e-eye', iconTone: 'orange', entity: 'Analytics Dashboard', details: 'Προβολή analytics dashboard', ip: '192.168.1.10', result: 'success' },
    { date: '15/05/2024 08:22:17', user: 'System', email: 'system', avatar: '', avatarTone: 'system', action: 'Σύστημα', actionType: 'Backup', icon: 'e-settings', iconTone: 'purple', entity: '-', details: 'Ημερήσιο backup ολοκληρώθηκε', ip: '127.0.0.1', result: 'success' },
  ];

  constructor() {
    this.refreshFilteredLogs();
  }

  refreshFilteredLogs(): void {
    const search = this.searchTerm.trim().toLowerCase();

    this.filteredLogs = this.logs.filter(log => {
      const matchesSearch = !search ||
        log.user.toLowerCase().includes(search) ||
        log.email.toLowerCase().includes(search) ||
        log.entity.toLowerCase().includes(search) ||
        log.details.toLowerCase().includes(search);
      const matchesType = this.type === 'all' || log.action.toLowerCase().includes(this.type);
      const matchesUser = this.user === 'all' || log.user === this.user;
      const matchesEntity = this.entity === 'all' || log.actionType === this.entity;
      const matchesResult = this.result === 'all' || log.result === this.result;

      return matchesSearch && matchesType && matchesUser && matchesEntity && matchesResult;
    });
  }

  getResultLabel(result: LogResult): string {
    return result === 'success' ? 'Επιτυχία' : 'Αποτυχία';
  }
}
