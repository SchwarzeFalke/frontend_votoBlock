import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidentialelectionviewPage } from './presidentialelectionview.page';

describe('PresidentialelectionviewPage', () => {
  let component: PresidentialelectionviewPage;
  let fixture: ComponentFixture<PresidentialelectionviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresidentialelectionviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresidentialelectionviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
