import { TestBed } from '@angular/core/testing';

import { DemandeAchatService } from './demandeachat.service';

describe('DemandeachatService', () => {
  let service: DemandeAchatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeAchatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
