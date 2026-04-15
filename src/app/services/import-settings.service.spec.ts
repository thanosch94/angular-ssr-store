/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ImportSettingsService } from './import-settings.service';

describe('Service: ImportSettings', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImportSettingsService]
    });
  });

  it('should ...', inject([ImportSettingsService], (service: ImportSettingsService) => {
    expect(service).toBeTruthy();
  }));
});
