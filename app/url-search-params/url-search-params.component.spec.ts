import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlSearchParamsComponent } from './url-search-params.component';

describe('UrlSearchParamsComponent', () => {
  let component: UrlSearchParamsComponent;
  let fixture: ComponentFixture<UrlSearchParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlSearchParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlSearchParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
