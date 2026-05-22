import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { faSearch, faHeart, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router, RouterLink } from '@angular/router';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [FormsModule, FontAwesomeModule, RouterLink, SidebarModule, ButtonModule, TextBoxModule],
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchInput?: string;
  faSearch: any;
  faHeart: any;
  faHouse: any;
  faUser: any;
  isSidebarOpen = false;
  @Output() toggleSidebar = new EventEmitter<void>();

  constructor(private router: Router) {}

  ngOnInit() {
    this.faSearch = faSearch;
    this.faHeart = faHeart;
    this.faHouse = faHouse;
    this.faUser = faUser;

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
