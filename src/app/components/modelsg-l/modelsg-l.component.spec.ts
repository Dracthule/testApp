import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsgLComponent } from './modelsg-l.component';

describe('ModelsgLComponent', () => {
  let component: ModelsgLComponent;
  let fixture: ComponentFixture<ModelsgLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelsgLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsgLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
