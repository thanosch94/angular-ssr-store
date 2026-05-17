import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule, SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

type ThemeMode = 'light' | 'dark' | 'auto';
type SidebarTone = 'dark' | 'light';

interface SelectOption {
  text: string;
  value: string;
}

interface ThemeOption {
  key: ThemeMode;
  label: string;
  iconClass: string;
}

@Component({
  selector: 'app-appearance-settings',
  imports: [CommonModule, FormsModule, ButtonModule, SwitchModule, DropDownListModule],
  templateUrl: './appearance-settings.component.html',
  styleUrl: './appearance-settings.component.css',
})
export class AppearanceSettingsComponent {
  selectedTheme: ThemeMode = 'light';
  selectedPrimaryColor = '#6048f5';
  selectedSidebarTone: SidebarTone = 'dark';
  sidebarWidth = 'normal';
  sidebarBehavior = 'fixed';
  elementDensity = 'normal';
  collapsedSidebar = false;
  fontFamily = 'inter';
  baseFontSize = 14;
  lineHeight = 'normal';
  showBreadcrumbs = true;
  showAvatars = true;
  enableAnimations = true;
  compactTables = false;
  helperTips = true;

  readonly fields = { text: 'text', value: 'value' };

  readonly themeOptions: ThemeOption[] = [
    { key: 'light', label: 'Φωτεινό', iconClass: 'e-day' },
    { key: 'dark', label: 'Σκούρο', iconClass: 'e-contrast' },
    { key: 'auto', label: 'Αυτόματο', iconClass: 'e-display' },
  ];

  readonly primaryColors = ['#6048f5', '#1e88e5', '#12b8b8', '#45bf5b', '#ff8a00', '#f04438', '#e52576', '#7b2ff2', '#64748b'];

  readonly sidebarWidthOptions: SelectOption[] = [
    { text: 'Κανονικό (250px)', value: 'normal' },
    { text: 'Στενό (220px)', value: 'narrow' },
    { text: 'Φαρδύ (280px)', value: 'wide' },
  ];

  readonly sidebarBehaviorOptions: SelectOption[] = [
    { text: 'Σταθερό (πάντα ορατό)', value: 'fixed' },
    { text: 'Κρυφό σε μικρές οθόνες', value: 'responsive' },
    { text: 'Αιωρούμενο', value: 'floating' },
  ];

  readonly densityOptions: SelectOption[] = [
    { text: 'Άνετη', value: 'comfortable' },
    { text: 'Κανονική', value: 'normal' },
    { text: 'Συμπαγής', value: 'compact' },
  ];

  readonly fontFamilyOptions: SelectOption[] = [
    { text: 'Inter (Προεπιλογή)', value: 'inter' },
    { text: 'Segoe UI', value: 'segoe' },
    { text: 'Roboto', value: 'roboto' },
  ];

  readonly lineHeightOptions: SelectOption[] = [
    { text: 'Σφιχτό', value: 'tight' },
    { text: 'Κανονικό', value: 'normal' },
    { text: 'Άνετο', value: 'relaxed' },
  ];

  selectTheme(theme: ThemeMode): void {
    this.selectedTheme = theme;
  }

  selectPrimaryColor(color: string): void {
    this.selectedPrimaryColor = color;
  }

  selectSidebarTone(tone: SidebarTone): void {
    this.selectedSidebarTone = tone;
  }

  changeFontSize(delta: number): void {
    this.baseFontSize = Math.min(18, Math.max(12, this.baseFontSize + delta));
  }
}
