import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinerieComponent } from './linerie.component';

describe('LinerieComponent', () => {
  let component: LinerieComponent;
  let fixture: ComponentFixture<LinerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
