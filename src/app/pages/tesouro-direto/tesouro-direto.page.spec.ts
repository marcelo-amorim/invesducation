import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesouroDiretoPage } from './tesouro-direto.page';

describe('TesouroDiretoPage', () => {
  let component: TesouroDiretoPage;
  let fixture: ComponentFixture<TesouroDiretoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesouroDiretoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesouroDiretoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
