import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemcommandeComponent } from './itemcommande.component';

describe('ItemcommandeComponent', () => {
  let component: ItemcommandeComponent;
  let fixture: ComponentFixture<ItemcommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemcommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemcommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
