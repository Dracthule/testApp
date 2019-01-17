import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FappingComponent } from './fapping.component';

describe('FappingComponent', () => {
  let component: FappingComponent;
  let fixture: ComponentFixture<FappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
