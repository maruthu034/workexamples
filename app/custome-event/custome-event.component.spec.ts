import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeEventComponent } from './custome-event.component';

describe('CustomeEventComponent', () => {
  let component: CustomeEventComponent;
  let fixture: ComponentFixture<CustomeEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomeEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomeEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
