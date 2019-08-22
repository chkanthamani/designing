import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeader1Component } from './page-header1.component';

describe('PageHeader1Component', () => {
  let component: PageHeader1Component;
  let fixture: ComponentFixture<PageHeader1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHeader1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHeader1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
