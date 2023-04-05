import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCComponent } from './nav-c.component';

describe('NavCComponent', () => {
  let component: NavCComponent;
  let fixture: ComponentFixture<NavCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
