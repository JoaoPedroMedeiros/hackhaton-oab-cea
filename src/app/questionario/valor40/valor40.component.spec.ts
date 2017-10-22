import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Valor40Component } from './valor40.component';

describe('Valor40Component', () => {
  let component: Valor40Component;
  let fixture: ComponentFixture<Valor40Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Valor40Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Valor40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
