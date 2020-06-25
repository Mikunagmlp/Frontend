import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UeCrearComponent } from './ue-crear.component';

describe('UeCrearComponent', () => {
  let component: UeCrearComponent;
  let fixture: ComponentFixture<UeCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UeCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UeCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
