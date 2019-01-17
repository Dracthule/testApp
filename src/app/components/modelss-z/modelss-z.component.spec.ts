import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelssZComponent } from './modelss-z.component';

describe('ModelssZComponent', () => {
  let component: ModelssZComponent;
  let fixture: ComponentFixture<ModelssZComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelssZComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelssZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
