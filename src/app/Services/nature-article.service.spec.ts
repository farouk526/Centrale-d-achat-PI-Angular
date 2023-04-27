import { TestBed } from '@angular/core/testing';

import { NatureArticleService } from './nature-article.service';

describe('NatureArticleService', () => {
  let service: NatureArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NatureArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
