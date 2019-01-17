import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalComponent } from './anal.component';

describe('AnalComponent', () => {
  let component: AnalComponent;
  let fixture: ComponentFixture<AnalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
