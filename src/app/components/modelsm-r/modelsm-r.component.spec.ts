import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsmRComponent } from './modelsm-r.component';

describe('ModelsmRComponent', () => {
  let component: ModelsmRComponent;
  let fixture: ComponentFixture<ModelsmRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelsmRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsmRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
