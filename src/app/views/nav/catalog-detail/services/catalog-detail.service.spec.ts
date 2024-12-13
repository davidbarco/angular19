import { TestBed } from '@angular/core/testing';

import { CatalogDetailService } from './catalog-detail.service';

describe('CatalogDetailService', () => {
  let service: CatalogDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
