import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecisaAdvogadoComponent } from './precisa-advogado.component';

describe('PrecisaAdvogadoComponent', () => {
  let component: PrecisaAdvogadoComponent;
  let fixture: ComponentFixture<PrecisaAdvogadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecisaAdvogadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecisaAdvogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
