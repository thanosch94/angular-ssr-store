import { Injectable } from '@angular/core';
import { environment } from '../env/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }
  headers: any;

  getHeaders() {
    this.headers = {
      // Authorization: `Bearer ${this.token}`,
      'Content-Type': 'application/json',
    };
    return this.headers;
  }

  getApiService() {
    let serviceUrl = environment.apiUrl
    return serviceUrl;
  }
}
