import { Injectable } from '@angular/core';
import { ImportSetting } from '../interfaces/import-setting';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Guid } from 'guid-typescript';

@Injectable({
  providedIn: 'root',
})
export class ImportSettingsService {
  service: string;

  constructor(private http: HttpClient, private auth: AuthService) {
    this.service = this.auth.getApiService();
  }

  public GetAll() {
    debugger
    return this.http.get<ImportSetting[]>(this.service + 'ImportsSettings/getall', {
      headers: this.auth.getHeaders(),
    });
  }

    public InsertDto(dto: ImportSetting) {
    return this.http.post<ImportSetting>(this.service + 'ImportsSettings/insertdto', dto, {
      headers: this.auth.headers,
    });
  }

  public UpdateDto(dto: ImportSetting) {
    return this.http.put<ImportSetting>(this.service + 'ImportsSettings/updatedto', dto, {
      headers: this.auth.headers,
    });

  }
  public DeleteById(id: Guid) {
    return this.http.delete<ImportSetting>(this.service + 'ImportsSettings/deletebyid/' + id, {
      headers: this.auth.headers,
    });
  }
}
