import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitprocessComponent } from './exitprocess.component';

describe('ExitprocessComponent', () => {
  let component: ExitprocessComponent;
  let fixture: ComponentFixture<ExitprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExitprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
