import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingDesktopComponent } from './landing-desktop.component';

describe('LandingDesktopComponent', () => {
  let component: LandingDesktopComponent;
  let fixture: ComponentFixture<LandingDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
