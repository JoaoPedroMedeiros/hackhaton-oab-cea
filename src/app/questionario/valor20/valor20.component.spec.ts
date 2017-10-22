import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Valor20Component } from './valor20.component';

describe('Valor20Component', () => {
  let component: Valor20Component;
  let fixture: ComponentFixture<Valor20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Valor20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Valor20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
