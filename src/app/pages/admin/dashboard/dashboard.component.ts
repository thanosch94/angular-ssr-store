import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { GridModule, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';

interface SummaryMetric {
  label: string;
  value: string;
  trend: string;
  iconClass: string;
  tone: string;
}

interface TableItem {
  title: string;
  image?: string;
  valueA: string;
  valueB: string;
  valueC?: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, ButtonModule, DropDownListModule, GridModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  selectedRange = '7';
  readonly gridSelectionSettings: SelectionSettingsModel = { type: 'Single', mode: 'Row' };

  readonly rangeOptions = [
    { text: 'Τελευταίες 7 ημέρες', value: '7' },
    { text: 'Τελευταίες 30 ημέρες', value: '30' },
    { text: 'Τρέχων μήνας', value: 'month' },
  ];

  readonly metrics: SummaryMetric[] = [
    { label: 'Page Views', value: '125,430', trend: '18.6%', iconClass: 'e-eye', tone: 'purple' },
    { label: 'Unique Visitors', value: '87,256', trend: '15.3%', iconClass: 'e-people', tone: 'blue' },
    { label: 'Affiliate Clicks', value: '6,842', trend: '21.7%', iconClass: 'e-link', tone: 'green' },
    { label: 'CTR', value: '5.46%', trend: '1.8%', iconClass: 'e-chart', tone: 'orange' },
    { label: 'Avg Clicks / Article', value: '12.6', trend: '11.2%', iconClass: 'e-file-document', tone: 'purple' },
    { label: 'Avg Clicks / Product', value: '9.3', trend: '9.4%', iconClass: 'e-order', tone: 'cyan' },
  ];

  readonly chartPoints = '0,122 96,72 192,96 288,78 384,60 480,82 576,76 672,73';
  readonly clickPoints = '0,164 96,132 192,146 288,136 384,118 480,137 576,133 672,128';

  readonly sources = [
    { label: 'Organic Search', value: '62.5%', color: '#6048f5' },
    { label: 'Direct', value: '18.7%', color: '#2563eb' },
    { label: 'Social Media', value: '11.3%', color: '#58c783' },
    { label: 'Referral', value: '5.6%', color: '#ff991f' },
    { label: 'Paid Ads', value: '1.9%', color: '#e94668' },
  ];

  readonly quickActions = [
    'Προσθήκη Άρθρου',
    'Προσθήκη Προϊόντος',
    'Προσθήκη Affiliate Link',
    'Προσθήκη Καταστήματος',
    'Δημιουργία Banner',
    'Προβολή Analytics',
  ];

  readonly topArticles: TableItem[] = [
    { title: 'Τα καλύτερα laptops για το 2024', valueA: '15,230', valueB: '1,245', valueC: '8.18%' },
    { title: '10 ασύρματα ακουστικά με το...', valueA: '9,876', valueB: '875', valueC: '8.86%' },
    { title: 'Οδηγός αγοράς: Κινητά 2024', valueA: '8,543', valueB: '654', valueC: '7.66%' },
    { title: 'Καφετιέρες για τέλειο καφέ', valueA: '6,432', valueB: '312', valueC: '4.85%' },
    { title: 'Smartwatches: Ποιες αξίζουν', valueA: '5,985', valueB: '298', valueC: '4.98%' },
  ];

  readonly topProducts: TableItem[] = [
    { title: 'iPhone 15 128GB', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=80&h=80&fit=crop', valueA: '1,245', valueB: '6.42%' },
    { title: 'Sony WH-1000XM5', image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=80&h=80&fit=crop', valueA: '980', valueB: '5.91%' },
    { title: 'Dell XPS 13', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=80&h=80&fit=crop', valueA: '876', valueB: '4.78%' },
    { title: 'Samsung Galaxy S24', image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=80&h=80&fit=crop', valueA: '765', valueB: '4.33%' },
    { title: 'Apple Watch Series 9', image: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=80&h=80&fit=crop', valueA: '654', valueB: '4.12%' },
  ];

  readonly topStores = [
    { name: 'Amazon', clicks: '3,125', percent: '45.7%', logo: 'a', tone: 'amazon' },
    { name: 'Skroutz', clicks: '1,842', percent: '26.9%', logo: 'S', tone: 'skroutz' },
    { name: 'Public', clicks: '1,024', percent: '15.0%', logo: 'P', tone: 'public' },
    { name: 'eShop', clicks: '512', percent: '7.5%', logo: 'e', tone: 'eshop' },
    { name: 'MediaMarkt', clicks: '339', percent: '4.9%', logo: 'M', tone: 'media' },
  ];

  readonly insights = [
    { icon: 'e-warning', tone: 'warning', text: 'Το άρθρο "Τα καλύτερα laptops για το 2024" έχει υψηλή επισκεψιμότητα αλλά χαμηλό CTR (2.1%).', action: 'Δες προτάσεις' },
    { icon: 'e-arrow-up', tone: 'success', text: 'Το άρθρο "10 ασύρματα ακουστικά με το καλύτερο ήχο" έχει το υψηλότερο CTR (8.86%).', action: 'Δες αναλυτικά' },
    { icon: 'e-circle-info', tone: 'info', text: '3 άρθρα δεν περιέχουν affiliate links.', action: 'Δες άρθρα' },
  ];

  readonly activity = [
    { icon: 'e-file-document', tone: 'green', title: 'Νέο άρθρο δημοσιεύτηκε', subtitle: 'Τα καλύτερα tablets για το 2024', time: 'πριν από 2 ώρες' },
    { icon: 'e-link', tone: 'blue', title: 'Προστέθηκε νέο affiliate link', subtitle: 'iPhone 15 - Public', time: 'πριν από 4 ώρες' },
    { icon: 'e-order', tone: 'green', title: 'Ενημερώθηκε προϊόν', subtitle: 'Sony WH-1000XM5', time: 'πριν από 5 ώρες' },
    { icon: 'e-chart', tone: 'blue', title: 'Αύξηση clicks 28%', subtitle: 'στο άρθρο "Οδηγός αγοράς: Κινητά 2024"', time: 'πριν από 1 ημέρα' },
  ];
}
