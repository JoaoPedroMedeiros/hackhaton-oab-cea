import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAdvogadoComponent } from './lista-advogado.component';

describe('ListaAdvogadoComponent', () => {
  let component: ListaAdvogadoComponent;
  let fixture: ComponentFixture<ListaAdvogadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAdvogadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAdvogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
