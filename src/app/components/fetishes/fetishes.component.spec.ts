import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetishesComponent } from './fetishes.component';

describe('FetishesComponent', () => {
  let component: FetishesComponent;
  let fixture: ComponentFixture<FetishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetishesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
