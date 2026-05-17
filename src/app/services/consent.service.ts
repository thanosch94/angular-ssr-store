import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ConsentService {
service: string;

  constructor(private http: HttpClient, private auth: AuthService) {
    this.service = this.auth.getApiService();
  }


  public AcceptAll() {
    return this.http.get(this.service + 'Consent/accept-all', {
      headers: this.auth.getHeaders(),
      withCredentials: true
    });
  }

}
