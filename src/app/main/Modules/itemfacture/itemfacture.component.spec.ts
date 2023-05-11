import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemfactureComponent } from './itemfacture.component';

describe('ItemfactureComponent', () => {
  let component: ItemfactureComponent;
  let fixture: ComponentFixture<ItemfactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemfactureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemfactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
