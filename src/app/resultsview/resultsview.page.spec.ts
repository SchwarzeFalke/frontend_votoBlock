import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsviewPage } from './resultsview.page';

describe('ResultsviewPage', () => {
  let component: ResultsviewPage;
  let fixture: ComponentFixture<ResultsviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
