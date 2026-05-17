import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule, CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { TextAreaModule, TextBoxModule } from '@syncfusion/ej2-angular-inputs';

interface PermissionItem {
  title: string;
  description: string;
  enabled: boolean;
}

@Component({
  selector: 'app-user-edit',
  imports: [CommonModule, FormsModule, ButtonModule, CheckBoxModule, DropDownListModule, TextBoxModule, TextAreaModule],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css',
})
export class UserEditComponent {
  firstName = 'Γιάννης';
  lastName = 'Παπαδόπουλος';
  email = 'giannis@affiliatepro.gr';
  username = 'giannis';
  role = 'admin';
  language = 'el';
  bio = 'Υπεύθυνος διαχείρισης του συστήματος και όλων των λειτουργιών.';

  readonly fields = { text: 'text', value: 'value' };

  readonly roleOptions = [
    { text: 'Διαχειριστής', value: 'admin' },
    { text: 'Editor', value: 'editor' },
    { text: 'Viewer', value: 'viewer' },
  ];

  readonly languageOptions = [
    { text: 'Ελληνικά', value: 'el' },
    { text: 'English', value: 'en' },
  ];

  readonly permissions: PermissionItem[] = [
    { title: 'Dashboard', description: 'Πρόσβαση στο dashboard', enabled: true },
    { title: 'Analytics', description: 'Πρόσβαση σε αναλυτικά στοιχεία', enabled: true },
    { title: 'Καταστήματα', description: 'Διαχείριση καταστημάτων', enabled: true },
    { title: 'Προϊόντα', description: 'Διαχείριση προϊόντων', enabled: true },
    { title: 'Άρθρα', description: 'Διαχείριση άρθρων', enabled: true },
    { title: 'Κατηγορίες', description: 'Διαχείριση κατηγοριών', enabled: true },
    { title: 'Affiliate Links', description: 'Διαχείριση affiliate links', enabled: true },
    { title: 'Ρυθμίσεις', description: 'Πρόσβαση στις ρυθμίσεις', enabled: true },
    { title: 'Χρήστες', description: 'Διαχείριση χρηστών', enabled: true },
  ];

  readonly activity = [
    { title: 'Σύνδεση στο σύστημα', subtitle: '', time: '15/05/2024 - 10:30', tone: 'green' },
    { title: 'Ενημέρωση άρθρου', subtitle: 'Top 10 Ακουστικά 2024', time: '15/05/2024 - 09:15', tone: 'blue' },
    { title: 'Δημιουργία προϊόντος', subtitle: 'Sony WH-1000XM5', time: '14/05/2024 - 16:45', tone: 'purple' },
    { title: 'Διαγραφή link', subtitle: 'link_id_4567', time: '14/05/2024 - 11:20', tone: 'red' },
    { title: 'Σύνδεση στο σύστημα', subtitle: '', time: '14/05/2024 - 09:05', tone: 'green' },
  ];

  constructor(private router: Router) {}

  backToList(): void {
    this.router.navigate(['/admin/users']);
  }
}
