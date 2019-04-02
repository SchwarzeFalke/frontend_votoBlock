import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteSubmitPage } from './vote-submit.page';

describe('VoteSubmitPage', () => {
  let component: VoteSubmitPage;
  let fixture: ComponentFixture<VoteSubmitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteSubmitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteSubmitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
