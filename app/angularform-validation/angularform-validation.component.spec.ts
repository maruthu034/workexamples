import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularformValidationComponent } from './angularform-validation.component';

describe('AngularformValidationComponent', () => {
  let component: AngularformValidationComponent;
  let fixture: ComponentFixture<AngularformValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularformValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularformValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
