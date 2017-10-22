import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpoPeticaoComponent } from './corpo-peticao.component';

describe('CorpoPeticaoComponent', () => {
  let component: CorpoPeticaoComponent;
  let fixture: ComponentFixture<CorpoPeticaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorpoPeticaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorpoPeticaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
