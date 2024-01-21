import { TestBed } from '@angular/core/testing';

import { CanActiveGaurdService } from './can-active-gaurd.service';

describe('CanActiveGaurdService', () => {
  let service: CanActiveGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanActiveGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
