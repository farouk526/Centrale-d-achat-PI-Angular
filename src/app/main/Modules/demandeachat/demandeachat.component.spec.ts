import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeachatComponent } from './demandeachat.component';

describe('DemandeachatComponent', () => {
  let component: DemandeachatComponent;
  let fixture: ComponentFixture<DemandeachatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeachatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeachatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
