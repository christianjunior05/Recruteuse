import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavRComponent } from './nav-r.component';

describe('NavRComponent', () => {
  let component: NavRComponent;
  let fixture: ComponentFixture<NavRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
