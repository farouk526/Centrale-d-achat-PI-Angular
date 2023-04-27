import { TestBed } from '@angular/core/testing';

import { ItemFactureService } from './itemfacture.service';

describe('ItemfactureService', () => {
  let service: ItemFactureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemFactureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
