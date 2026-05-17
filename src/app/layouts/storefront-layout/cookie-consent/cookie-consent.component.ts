import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, inject, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ConsentService } from '../../../services/consent.service';

type ConsentLevel = 'necessary' | 'all';

@Component({
  selector: 'app-cookie-consent',
  imports: [CommonModule, ButtonModule],
  templateUrl: './cookie-consent.component.html',
  styleUrl: './cookie-consent.component.scss',
})
export class CookieConsentComponent implements OnInit {
  private readonly consentCookieName = 'afh_consent_id';
  protected isVisible = false;

  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID)
  consentService = inject(ConsentService)

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.isVisible = !this.hasConsentCookie();
  }

  acceptNecessary(): void {
  }

  acceptAll(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.consentService.AcceptAll().subscribe({
      next: () => {
          this.isVisible = false;
      }})
    }

  private hasConsentCookie(): boolean {
    const cookies = this.document.cookie.split(';').map(cookie => cookie.trim()).some(cookie => cookie.startsWith(`${this.consentCookieName}=`));
    return cookies;
  }

}
