import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsaFComponent } from './modelsa-f.component';

describe('ModelsaFComponent', () => {
  let component: ModelsaFComponent;
  let fixture: ComponentFixture<ModelsaFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelsaFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsaFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
