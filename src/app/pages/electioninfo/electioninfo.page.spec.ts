import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectioninfoPage } from './electioninfo.page';

describe('ElectioninfoPage', () => {
  let component: ElectioninfoPage;
  let fixture: ComponentFixture<ElectioninfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectioninfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectioninfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
