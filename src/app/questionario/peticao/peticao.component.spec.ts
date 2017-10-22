import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeticaoComponent } from './peticao.component';

describe('PeticaoComponent', () => {
  let component: PeticaoComponent;
  let fixture: ComponentFixture<PeticaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeticaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeticaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
