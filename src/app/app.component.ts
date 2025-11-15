import { Component, ViewChild } from '@angular/core';import { TextBoxModule, TextAreaModule, NumericTextBoxModule, MaskedTextBoxModule, SliderModule, UploaderModule, ColorPickerModule, SignatureModule, RatingModule, OtpInputModule, SmartTextAreaModule, SpeechToTextModule } from '@syncfusion/ej2-angular-inputs';

import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import {
  SidebarAllModule,
  SidebarComponent,
} from '@syncfusion/ej2-angular-navigations';
import { CategoriesComponent } from './pages/categories/categories.component';

@Component({
  selector: 'app-root',
  imports: [TextBoxModule, TextAreaModule, NumericTextBoxModule, MaskedTextBoxModule, SliderModule, UploaderModule, ColorPickerModule, SignatureModule, RatingModule, OtpInputModule, SmartTextAreaModule, SpeechToTextModule, 
    HeaderComponent,
    RouterOutlet,
    SidebarAllModule,
    CategoriesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('sidebar') sidebar?: SidebarComponent;
  title = 'All for home';

  onToggleSidebar() {
    this.sidebar?.toggle();
  }

  public onCreated() {
    if (this.sidebar) {
      this.sidebar.isOpen = false;
    }
    (this.sidebar as SidebarComponent).element.style.visibility = '';
  }
}
