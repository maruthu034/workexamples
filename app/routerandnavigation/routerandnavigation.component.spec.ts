import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterandnavigationComponent } from './routerandnavigation.component';

describe('RouterandnavigationComponent', () => {
  let component: RouterandnavigationComponent;
  let fixture: ComponentFixture<RouterandnavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterandnavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterandnavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
