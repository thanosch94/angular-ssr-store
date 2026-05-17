import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule, CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { GridModule, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';

type ArticleStatus = 'published' | 'draft' | 'scheduled' | 'inactive';

interface ArticleItem {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  status: ArticleStatus;
  views: number;
  clicks: number;
  affiliateLinks: number;
  updated: string;
  thumbnailTone: string;
}

@Component({
  selector: 'app-articles-list',
  imports: [CommonModule, FormsModule, ButtonModule, CheckBoxModule, DropDownListModule, GridModule, TextBoxModule],
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.css',
})
export class ArticlesListComponent {
  searchTerm = '';
  selectedCategory = 'all';
  selectedStatus: ArticleStatus | 'all' = 'all';
  selectedAuthor = 'all';
  filteredArticles: ArticleItem[] = [];
  publishedCount = 0;
  draftCount = 0;
  pageSize = 10;
  readonly gridSelectionSettings: SelectionSettingsModel = { type: 'Multiple', mode: 'Row', checkboxOnly: false };

  readonly categoryOptions = [
    { text: 'Όλες οι Κατηγορίες', value: 'all' },
    { text: 'Τεχνολογία', value: 'Τεχνολογία' },
    { text: 'Ακουστικά', value: 'Ακουστικά' },
    { text: 'Οδηγοί Αγοράς', value: 'Οδηγοί Αγοράς' },
    { text: 'Smart Home', value: 'Smart Home' },
  ];

  readonly statusOptions = [
    { text: 'Όλες οι Καταστάσεις', value: 'all' },
    { text: 'Δημοσιευμένο', value: 'published' },
    { text: 'Προσχέδιο', value: 'draft' },
    { text: 'Προγραμματισμένο', value: 'scheduled' },
    { text: 'Ανενεργό', value: 'inactive' },
  ];

  readonly authorOptions = [
    { text: 'Όλοι οι Συντάκτες', value: 'all' },
    { text: 'Admin', value: 'Admin' },
    { text: 'Μαρία', value: 'Μαρία' },
    { text: 'Νίκος', value: 'Νίκος' },
  ];

  readonly pageSizeOptions = [
    { text: '10 ανά σελίδα', value: 10 },
    { text: '25 ανά σελίδα', value: 25 },
    { text: '50 ανά σελίδα', value: 50 },
  ];

  readonly articles: ArticleItem[] = [
    { id: 1, title: 'Τα καλύτερα laptops για το 2024', excerpt: 'Αναλυτικός οδηγός αγοράς για laptops εργασίας, σπουδών και gaming.', category: 'Τεχνολογία', author: 'Admin', status: 'published', views: 15230, clicks: 1245, affiliateLinks: 8, updated: '20/05/2024 14:32', thumbnailTone: 'blue' },
    { id: 2, title: '10 ασύρματα ακουστικά με το καλύτερο ήχο', excerpt: 'Συγκρίνουμε τα δημοφιλέστερα ασύρματα ακουστικά της αγοράς.', category: 'Ακουστικά', author: 'Μαρία', status: 'published', views: 9876, clicks: 875, affiliateLinks: 6, updated: '19/05/2024 11:15', thumbnailTone: 'purple' },
    { id: 3, title: 'Οδηγός αγοράς: Κινητά 2024', excerpt: 'Πώς να επιλέξετε smartphone ανάλογα με budget, κάμερα και αυτονομία.', category: 'Οδηγοί Αγοράς', author: 'Νίκος', status: 'published', views: 8543, clicks: 654, affiliateLinks: 10, updated: '18/05/2024 16:45', thumbnailTone: 'green' },
    { id: 4, title: 'Καφετιέρες για τέλειο καφέ στο σπίτι', excerpt: 'Οι καλύτερες επιλογές για espresso, φίλτρου και κάψουλες.', category: 'Smart Home', author: 'Μαρία', status: 'draft', views: 6432, clicks: 312, affiliateLinks: 4, updated: '17/05/2024 09:20', thumbnailTone: 'orange' },
    { id: 5, title: 'Smartwatches: Ποιες επιλογές αξίζουν', excerpt: 'Σύγκριση χαρακτηριστικών, αυτονομίας και εφαρμογών υγείας.', category: 'Τεχνολογία', author: 'Admin', status: 'scheduled', views: 5985, clicks: 298, affiliateLinks: 5, updated: '16/05/2024 13:10', thumbnailTone: 'cyan' },
    { id: 6, title: 'Τα απαραίτητα gadgets για remote work', excerpt: 'Περιφερειακά και εργαλεία που βελτιώνουν την καθημερινή εργασία.', category: 'Τεχνολογία', author: 'Νίκος', status: 'published', views: 4210, clicks: 226, affiliateLinks: 7, updated: '15/05/2024 18:05', thumbnailTone: 'red' },
    { id: 7, title: 'Πώς να στήσετε ένα έξυπνο σπίτι', excerpt: 'Οδηγός για φώτα, αισθητήρες, hubs και αυτοματισμούς.', category: 'Smart Home', author: 'Admin', status: 'inactive', views: 3188, clicks: 0, affiliateLinks: 3, updated: '14/05/2024 10:40', thumbnailTone: 'gray' },
    { id: 8, title: 'USB-C φορτιστές: τι να προσέξετε', excerpt: 'Watt, πρωτόκολλα φόρτισης και συμβατότητα με συσκευές.', category: 'Οδηγοί Αγοράς', author: 'Μαρία', status: 'published', views: 2875, clicks: 189, affiliateLinks: 6, updated: '13/05/2024 15:22', thumbnailTone: 'blue' },
  ];

  constructor() {
    this.publishedCount = this.articles.filter(article => article.status === 'published').length;
    this.draftCount = this.articles.filter(article => article.status === 'draft').length;
    this.refreshFilteredArticles();
  }

  refreshFilteredArticles(): void {
    const search = this.searchTerm.trim().toLowerCase();

    this.filteredArticles = this.articles.filter(article => {
      const matchesSearch = !search ||
        article.title.toLowerCase().includes(search) ||
        article.excerpt.toLowerCase().includes(search);
      const matchesCategory = this.selectedCategory === 'all' || article.category === this.selectedCategory;
      const matchesStatus = this.selectedStatus === 'all' || article.status === this.selectedStatus;
      const matchesAuthor = this.selectedAuthor === 'all' || article.author === this.selectedAuthor;
      return matchesSearch && matchesCategory && matchesStatus && matchesAuthor;
    });
  }

  getStatusLabel(status: ArticleStatus): string {
    return {
      published: 'Δημοσιευμένο',
      draft: 'Προσχέδιο',
      scheduled: 'Προγραμματισμένο',
      inactive: 'Ανενεργό',
    }[status];
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.selectedCategory = 'all';
    this.selectedStatus = 'all';
    this.selectedAuthor = 'all';
    this.refreshFilteredArticles();
  }
}
