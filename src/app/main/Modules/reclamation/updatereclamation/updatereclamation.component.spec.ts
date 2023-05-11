import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatereclamationComponent } from './updatereclamation.component';

describe('UpdatereclamationComponent', () => {
  let component: UpdatereclamationComponent;
  let fixture: ComponentFixture<UpdatereclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatereclamationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatereclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
