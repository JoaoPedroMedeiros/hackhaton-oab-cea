import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProcurarCnpjComponent } from './modal-procurar-cnpj.component';

describe('ModalProcurarCnpjComponent', () => {
  let component: ModalProcurarCnpjComponent;
  let fixture: ComponentFixture<ModalProcurarCnpjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalProcurarCnpjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalProcurarCnpjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
