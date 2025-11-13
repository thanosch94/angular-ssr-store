import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { faSearch, faHeart, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [FormsModule, FontAwesomeModule, SidebarModule, ButtonModule],
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchInput?: string;
  faSearch: any;
  faHeart: any;
  faBars: any;
  isSidebarOpen = false;
  @Output() toggleSidebar = new EventEmitter<void>();

  constructor(private router: Router) {}

  ngOnInit() {
    this.faSearch = faSearch;
    this.faHeart = faHeart;
      this.faBars = faBars;

  }

  onSearch() {
    this.router.navigate([
      '/products-list'],
      {
        queryParams: {
          searchInput: this.searchInput,
        },
      },
    );
  }

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
}
