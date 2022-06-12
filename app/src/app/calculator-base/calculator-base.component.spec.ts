import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorBaseComponent } from './calculator-base.component';

describe('CalculatorBaseComponent', () => {
  let component: CalculatorBaseComponent;
  let fixture: ComponentFixture<CalculatorBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
