import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pageheader1Component } from './pageheader1.component';

describe('Pageheader1Component', () => {
  let component: Pageheader1Component;
  let fixture: ComponentFixture<Pageheader1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pageheader1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pageheader1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
