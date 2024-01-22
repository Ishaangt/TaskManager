import { TestBed } from '@angular/core/testing';

import { PageAccessGaurdService } from './page-access-gaurd.service';

describe('PageAccessGaurdService', () => {
  let service: PageAccessGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageAccessGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
