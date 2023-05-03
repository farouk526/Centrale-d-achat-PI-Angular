import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreserviceComponent } from './offreservice.component';

describe('OffreserviceComponent', () => {
  let component: OffreserviceComponent;
  let fixture: ComponentFixture<OffreserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffreserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffreserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
