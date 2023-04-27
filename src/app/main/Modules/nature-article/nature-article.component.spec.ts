import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatureArticleComponent } from './nature-article.component';

describe('NatureArticleComponent', () => {
  let component: NatureArticleComponent;
  let fixture: ComponentFixture<NatureArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NatureArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NatureArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
