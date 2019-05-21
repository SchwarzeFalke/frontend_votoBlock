import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteShowPage } from './vote-show.page';

describe('VoteShowPage', () => {
  let component: VoteShowPage;
  let fixture: ComponentFixture<VoteShowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteShowPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteShowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
