import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalelectionviewPage } from './municipalelectionview.page';

describe('MunicipalelectionviewPage', () => {
  let component: MunicipalelectionviewPage;
  let fixture: ComponentFixture<MunicipalelectionviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunicipalelectionviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipalelectionviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
