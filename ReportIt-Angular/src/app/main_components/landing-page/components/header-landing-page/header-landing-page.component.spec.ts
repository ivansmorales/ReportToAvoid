import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLandingPageComponent } from './header-landing-page.component';

describe('HeaderLandingPageComponent', () => {
  let component: HeaderLandingPageComponent;
  let fixture: ComponentFixture<HeaderLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
