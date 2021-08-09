import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPurchaseComponent } from './register-purchase.component';

describe('RegisterPurchaseComponent', () => {
  let component: RegisterPurchaseComponent;
  let fixture: ComponentFixture<RegisterPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPurchaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
