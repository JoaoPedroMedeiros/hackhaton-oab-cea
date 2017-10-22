import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SozinhoComponent } from './sozinho.component';

describe('SozinhoComponent', () => {
  let component: SozinhoComponent;
  let fixture: ComponentFixture<SozinhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SozinhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SozinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
