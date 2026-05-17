import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { AnalyticsSettingsComponent } from './analytics-settings/analytics-settings.component';
import { AppearanceSettingsComponent } from './appearance-settings/appearance-settings.component';
import { BackupSettingsComponent } from './backup-settings/backup-settings.component';
import { EmailSettingsComponent } from './email-settings/email-settings.component';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';
import { NotificationsSettingsComponent } from './notifications-settings/notifications-settings.component';
import { SeoSettingsComponent } from './seo-settings/seo-settings.component';
import { SecuritySettingsComponent } from './security-settings/security-settings.component';

type SettingsCategoryKey = 'general' | 'appearance' | 'email' | 'analytics' | 'security' | 'seo' | 'notifications' | 'backup';

interface SettingsCategory {
  title: string;
  description: string;
  iconClass: string;
  key: SettingsCategoryKey;
}

@Component({
  selector: 'app-settings',
  imports: [
    CommonModule,
    ButtonModule,
    GeneralSettingsComponent,
    AppearanceSettingsComponent,
    EmailSettingsComponent,
    AnalyticsSettingsComponent,
    SecuritySettingsComponent,
    SeoSettingsComponent,
    NotificationsSettingsComponent,
    BackupSettingsComponent,
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent {
  activeCategory: SettingsCategoryKey = 'general';

  readonly categories: SettingsCategory[] = [
    { key: 'general', title: 'Γενικές Ρυθμίσεις', description: 'Βασικές ρυθμίσεις συστήματος', iconClass: 'e-settings' },
    { key: 'appearance', title: 'Εμφάνιση', description: 'Ρυθμίσεις εμφάνισης και UI', iconClass: 'e-style' },
    { key: 'email', title: 'Email', description: 'Ρυθμίσεις email και αποστολών', iconClass: 'e-send-1' },
    { key: 'analytics', title: 'Analytics', description: 'Ρυθμίσεις ανάλυσης', iconClass: 'e-chart' },
    { key: 'security', title: 'Ασφάλεια', description: 'Ρυθμίσεις ασφαλείας', iconClass: 'e-protect-sheet' },
    { key: 'seo', title: 'SEO', description: 'Ρυθμίσεις SEO', iconClass: 'e-search' },
    { key: 'notifications', title: 'Ειδοποιήσεις', description: 'Ρυθμίσεις ειδοποιήσεων', iconClass: 'e-clock' },
    { key: 'backup', title: 'Backup', description: 'Ρυθμίσεις αντιγράφων ασφαλείας', iconClass: 'e-layers' },
  ];

  get activeCategoryTitle(): string {
    return this.categories.find(category => category.key === this.activeCategory)?.title || '';
  }

  get pageTitle(): string {
    if (this.activeCategory === 'appearance') return 'Ρυθμίσεις / Εμφάνιση';
    if (this.activeCategory === 'email') return 'Ρυθμίσεις / Email';
    if (this.activeCategory === 'analytics') return 'Ρυθμίσεις / Analytics';
    if (this.activeCategory === 'security') return 'Ρυθμίσεις / Ασφάλεια';
    if (this.activeCategory === 'seo') return 'Ρυθμίσεις / SEO';
    if (this.activeCategory === 'notifications') return 'Ρυθμίσεις / Ειδοποιήσεις';
    if (this.activeCategory === 'backup') return 'Ρυθμίσεις / Backup';
    return 'Ρυθμίσεις';
  }

  get pageSubtitle(): string {
    if (this.activeCategory === 'appearance') return 'Προσαρμόστε την εμφάνιση και το UI του συστήματος';
    if (this.activeCategory === 'email') return 'Διαχείριση ρυθμίσεων email και αποστολών του συστήματος';
    if (this.activeCategory === 'analytics') return 'Προσαρμόστε τον τρόπο συλλογής, εμφάνισης και ανάλυσης των δεδομένων';
    if (this.activeCategory === 'security') return 'Διαχειριστείτε τις ρυθμίσεις ασφαλείας και προστασίας του συστήματος';
    if (this.activeCategory === 'seo') return 'Διαχειριστείτε τις ρυθμίσεις SEO και τα meta δεδομένα του συστήματος';
    if (this.activeCategory === 'notifications') return 'Διαχειριστείτε τις ειδοποιήσεις του συστήματος και τις προτιμήσεις σας';
    if (this.activeCategory === 'backup') return 'Διαχειριστείτε τα αντίγραφα ασφαλείας του συστήματος';
    return 'Διαχείριση ρυθμίσεων και παραμέτρων του συστήματος';
  }

  get isKnownCategory(): boolean {
    return ['general', 'appearance', 'email', 'analytics', 'security', 'seo', 'notifications', 'backup'].includes(this.activeCategory);
  }

  selectCategory(category: SettingsCategory): void {
    this.activeCategory = category.key;
  }
}
