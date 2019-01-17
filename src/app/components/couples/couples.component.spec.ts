import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouplesComponent } from './couples.component';

describe('CouplesComponent', () => {
  let component: CouplesComponent;
  let fixture: ComponentFixture<CouplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
