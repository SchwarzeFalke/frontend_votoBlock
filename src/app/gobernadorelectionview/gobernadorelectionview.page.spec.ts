import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GobernadorelectionviewPage } from './gobernadorelectionview.page';

describe('GobernadorelectionviewPage', () => {
  let component: GobernadorelectionviewPage;
  let fixture: ComponentFixture<GobernadorelectionviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GobernadorelectionviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GobernadorelectionviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
