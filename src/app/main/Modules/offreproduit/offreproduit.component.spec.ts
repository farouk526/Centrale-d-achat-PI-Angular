import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreproduitComponent } from './offreproduit.component';

describe('OffreproduitComponent', () => {
  let component: OffreproduitComponent;
  let fixture: ComponentFixture<OffreproduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreproduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
