import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallcommandeComponent } from './getallcommande.component';

describe('GetallcommandeComponent', () => {
  let component: GetallcommandeComponent;
  let fixture: ComponentFixture<GetallcommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallcommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallcommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
