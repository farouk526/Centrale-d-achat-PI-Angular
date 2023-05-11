import { TestBed } from '@angular/core/testing';

import { CodePromoService } from './codepromo.service';

describe('CodepromoService', () => {
  let service: CodePromoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodePromoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
