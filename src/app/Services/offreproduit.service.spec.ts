import { TestBed } from '@angular/core/testing';

import { OffreProduitService } from './offreproduit.service';

describe('OffreproduitService', () => {
  let service: OffreProduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffreProduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
