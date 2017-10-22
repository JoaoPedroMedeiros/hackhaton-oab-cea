import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAdvogadoComponent } from './info-advogado.component';

describe('InfoAdvogadoComponent', () => {
  let component: InfoAdvogadoComponent;
  let fixture: ComponentFixture<InfoAdvogadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoAdvogadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAdvogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
