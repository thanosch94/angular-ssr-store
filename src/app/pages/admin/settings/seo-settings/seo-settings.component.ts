import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule, SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';

interface SelectOption {
  text: string;
  value: string;
}

@Component({
  selector: 'app-seo-settings',
  imports: [FormsModule, ButtonModule, SwitchModule, DropDownListModule, TextBoxModule],
  templateUrl: './seo-settings.component.html',
  styleUrl: './seo-settings.component.css',
})
export class SeoSettingsComponent {
  siteTitle = 'AffiliatePro - Το απόλυτο εργαλείο για Affiliates';
  tagline = 'Αυξήστε τα έσοδά σας με ισχυρά εργαλεία και αναλύσεις';
  metaDescription = 'Το AffiliatePro σας παρέχει όλα τα εργαλεία που χρειάζεστε για να διαχειριστείτε τα affiliate links σας, να αναλύσετε την απόδοση και να αυξήσετε τα έσοδά σας.';
  keywords = 'affiliate, marketing, tracking, analytics, links, earnings';
  seoEnabled = true;
  sitemapEnabled = true;
  robotsEnabled = true;
  ogTitle = 'AffiliatePro - Αυξήστε τα έσοδά σας';
  ogDescription = 'Το AffiliatePro σας παρέχει όλα τα εργαλεία που χρειάζεστε για να πετύχετε περισσότερα.';
  ogType = 'website';
  ogLocale = 'el_GR';
  twitterCardType = 'summary_large_image';
  twitterSite = '@affiliatepro_gr';
  twitterTitle = 'AffiliatePro - Το απόλυτο εργαλείο για Affiliates';
  twitterDescription = 'Διαχειριστείτε τα affiliate links σας και αυξήστε τα έσοδά σας με ισχυρά εργαλεία και αναλύσεις.';

  readonly fields = { text: 'text', value: 'value' };

  readonly ogTypeOptions: SelectOption[] = [
    { text: 'website', value: 'website' },
    { text: 'article', value: 'article' },
    { text: 'product', value: 'product' },
  ];

  readonly twitterCardOptions: SelectOption[] = [
    { text: 'summary_large_image', value: 'summary_large_image' },
    { text: 'summary', value: 'summary' },
    { text: 'app', value: 'app' },
  ];
}
