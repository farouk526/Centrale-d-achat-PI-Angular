import { TestBed } from '@angular/core/testing';

import { ItemCommandeService } from './itemcommande.service';

describe('ItemcommandeService', () => {
  let service: ItemCommandeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemCommandeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
