import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateinfoPage } from './candidateinfo.page';

describe('CandidateinfoPage', () => {
  let component: CandidateinfoPage;
  let fixture: ComponentFixture<CandidateinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateinfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
