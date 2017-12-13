import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomepipeComponent } from './customepipe.component';

describe('CustomepipeComponent', () => {
  let component: CustomepipeComponent;
  let fixture: ComponentFixture<CustomepipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomepipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomepipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
