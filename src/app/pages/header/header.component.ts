import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { faSearch, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports:[FormsModule, FontAwesomeModule],
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchQuery?:string;
  faSearch: any;
  faHeart: any;

  constructor() { }

  ngOnInit() {
      this.faSearch = faSearch;
      this.faHeart = faHeart;

  }

  onSearch(){

  }

}
